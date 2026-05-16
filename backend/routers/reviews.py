from fastapi import APIRouter, HTTPException, status
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime
from typing import List
import os
from dotenv import load_dotenv
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from models import ReviewCreate, ReviewUpdate, ReviewResponse

load_dotenv()

router = APIRouter(prefix="/reviews", tags=["reviews"])

# MongoDB Connection
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb+srv://BakraBhai:0817%40gmail.com@bakrabhai.enn5rcg.mongodb.net/")
client = MongoClient(MONGODB_URI)
db = client.momomatrix
reviews_collection = db.reviews

def review_helper(review) -> dict:
    review["_id"] = str(review["_id"])
    return review

@router.get("/", response_model=List[ReviewResponse])
async def get_reviews(skip: int = 0, limit: int = 10, approved_only: bool = True):
    """
    Get all reviews with pagination
    """
    query = {"is_approved": True} if approved_only else {}
    reviews = list(reviews_collection.find(query).skip(skip).limit(limit).sort("created_at", -1))
    return [review_helper(review) for review in reviews]

@router.get("/{review_id}", response_model=ReviewResponse)
async def get_review(review_id: str):
    """
    Get a specific review by ID
    """
    try:
        review = reviews_collection.find_one({"_id": ObjectId(review_id)})
        if review:
            return review_helper(review)
        raise HTTPException(status_code=404, detail="Review not found")
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid review ID")

@router.post("/", response_model=ReviewResponse, status_code=status.HTTP_201_CREATED)
async def create_review(review: ReviewCreate):
    """
    Create a new customer review
    """
    review_dict = review.model_dump()
    review_dict["created_at"] = datetime.utcnow()
    review_dict["updated_at"] = datetime.utcnow()
    review_dict["is_approved"] = False  # Reviews need approval before showing
    
    result = reviews_collection.insert_one(review_dict)
    created_review = reviews_collection.find_one({"_id": result.inserted_id})
    
    return review_helper(created_review)

@router.put("/{review_id}", response_model=ReviewResponse)
async def update_review(review_id: str, review: ReviewUpdate):
    """
    Update an existing review
    """
    try:
        existing_review = reviews_collection.find_one({"_id": ObjectId(review_id)})
        if not existing_review:
            raise HTTPException(status_code=404, detail="Review not found")
        
        update_data = {k: v for k, v in review.model_dump().items() if v is not None}
        update_data["updated_at"] = datetime.utcnow()
        
        reviews_collection.update_one({"_id": ObjectId(review_id)}, {"$set": update_data})
        updated_review = reviews_collection.find_one({"_id": ObjectId(review_id)})
        
        return review_helper(updated_review)
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid review ID")

@router.delete("/{review_id}")
async def delete_review(review_id: str):
    """
    Delete a review
    """
    try:
        result = reviews_collection.delete_one({"_id": ObjectId(review_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Review not found")
        return {"message": "Review deleted successfully"}
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid review ID")

@router.patch("/{review_id}/approve")
async def approve_review(review_id: str):
    """
    Approve a review (admin function)
    """
    try:
        reviews_collection.update_one(
            {"_id": ObjectId(review_id)},
            {"$set": {"is_approved": True, "updated_at": datetime.utcnow()}}
        )
        return {"message": "Review approved successfully"}
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid review ID")

@router.get("/stats/summary")
async def get_review_stats():
    """
    Get review statistics
    """
    pipeline = [
        {
            "$group": {
                "_id": None,
                "total_reviews": {"$sum": 1},
                "average_rating": {"$avg": "$rating"},
                "approved_reviews": {
                    "$sum": {"$cond": [{"$eq": ["$is_approved", True]}, 1, 0]}
                }
            }
        }
    ]
    
    stats = list(reviews_collection.aggregate(pipeline))
    if stats:
        return stats[0]
    return {"total_reviews": 0, "average_rating": 0, "approved_reviews": 0}
