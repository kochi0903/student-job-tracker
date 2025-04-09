# Student Job Tracker - Server

A RESTful API server for managing student job applications and tracking their status.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- TypeScript

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

3. Start the server:
```bash
npm run dev    # Development mode
npm run build  # Build production
npm start      # Production mode
```

## API Endpoints

### Job Applications
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job application
- `GET /api/jobs/:id` - Get specific job
- `PUT /api/jobs/:id` - Update job application
- `DELETE /api/jobs/:id` - Delete job application

## Error Codes

- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
