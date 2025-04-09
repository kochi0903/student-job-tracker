# Student Job Tracker
# Student Job Tracker - Client
A React-based web application for students to track their job applications, interviews, and career development progress.

## Features

- Track job applications and their status
- Manage interview schedules
- Store company contacts and notes
- Dashboard with application statistics
- Easy to use interface for managing job search process

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd student-job-tracker/client
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## Environment Variables

Create a `.env` file in the client directory with the following variables:

```
REACT_APP_API_URL=<your-backend-api-url>
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

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

