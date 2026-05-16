# MomoMatrix Backend API

FastAPI backend for MomoMatrix with MongoDB database for customer reviews.

## Features

- Customer Reviews CRUD operations
- Review approval system
- Review statistics
- MongoDB integration
- CORS enabled for Next.js frontend

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your MongoDB connection string
```

3. Run the server:
```bash
python main.py
```

Or using uvicorn:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## API Endpoints

### Health Check
- `GET /` - API status
- `GET /health` - Database health check

### Reviews
- `GET /reviews/` - Get all reviews (paginated)
- `GET /reviews/{review_id}` - Get specific review
- `POST /reviews/` - Create new review
- `PUT /reviews/{review_id}` - Update review
- `DELETE /reviews/{review_id}` - Delete review
- `PATCH /reviews/{review_id}/approve` - Approve review
- `GET /reviews/stats/summary` - Get review statistics

## API Documentation

Once running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Database

Uses MongoDB with the following collections:
- `reviews` - Customer reviews

## Review Model

```json
{
  "customer_name": "string",
  "rating": 1-5,
  "comment": "string",
  "order_id": "string (optional)",
  "is_approved": boolean,
  "created_at": "datetime",
  "updated_at": "datetime"
}
```
