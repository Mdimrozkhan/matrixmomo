from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

class Database:
    client: MongoClient = None
    
    def connect(self):
        """Connect to MongoDB"""
        MONGODB_URI = os.getenv("MONGODB_URI", "mongodb+srv://BakraBhai:0817%40gmail.com@bakrabhai.enn5rcg.mongodb.net/")
        self.client = MongoClient(MONGODB_URI)
        print("Connected to MongoDB")
        return self.client
    
    def close(self):
        """Close MongoDB connection"""
        if self.client:
            self.client.close()
            print("MongoDB connection closed")

    def get_database(self):
        """Get the momomatrix database"""
        return self.client.momomatrix

# Singleton instance
db = Database()
