
"""
Test script for MomoMatrix API
Run this after starting the server to test the endpoints
"""
import requests
import json

BASE_URL = "http://localhost:8000"

def test_health():
    """Test health endpoint"""
    print("\n=== Testing Health Endpoint ===")
    response = requests.get(f"{BASE_URL}/health")
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")

def test_create_review():
    """Test creating a review"""
    print("\n=== Testing Create Review ===")
    review_data = {
        "customer_name": "Test Customer",
        "rating": 5,
        "comment": "Amazing momos! Best in Noida.",
        "order_id": "ORD-001"
    }
    response = requests.post(f"{BASE_URL}/reviews/", json=review_data)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2, default=str)}")
    return response.json().get("id") if response.status_code == 201 else None

def test_get_reviews():
    """Test getting all reviews"""
    print("\n=== Testing Get All Reviews ===")
    response = requests.get(f"{BASE_URL}/reviews/")
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2, default=str)}")

def test_get_review_stats():
    """Test getting review statistics"""
    print("\n=== Testing Review Statistics ===")
    response = requests.get(f"{BASE_URL}/reviews/stats/summary")
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2, default=str)}")

if __name__ == "__main__":
    print("Starting API Tests...")
    print(f"Base URL: {BASE_URL}")
    
    try:
        test_health()
        review_id = test_create_review()
        test_get_reviews()
        test_get_review_stats()
        
        print("\n=== All Tests Completed ===")
    except requests.exceptions.ConnectionError:
        print("\n❌ Error: Could not connect to API server.")
        print("Make sure the server is running on http://localhost:8000")
        print("Run: python main.py")
    except Exception as e:
        print(f"\n❌ Error: {e}")
