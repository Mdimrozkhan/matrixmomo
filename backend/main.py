from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from routers import reviews

load_dotenv()

app = FastAPI(
    title="MomoMatrix API",
    version="1.0.0",
    description="Backend API for MomoMatrix - Customer Reviews and Management"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb+srv://BakraBhai:0817%40gmail.com@bakrabhai.enn5rcg.mongodb.net/")
client = MongoClient(MONGODB_URI)
db = client.momomatrix

# Include routers
app.include_router(reviews.router)

@app.get("/")
async def root():
    return {
        "message": "MomoMatrix API is running",
        "version": "1.0.0",
        "docs": "/docs",
        "health": "/health"
    }

@app.get("/health")
async def health_check():
    try:
        client.admin.command('ping')
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        return {"status": "unhealthy", "database": "disconnected", "error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
