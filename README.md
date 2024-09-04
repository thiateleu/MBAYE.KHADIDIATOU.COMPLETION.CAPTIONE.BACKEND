# MBAYE.KHADIDIATOU.COMPLETION.CAPTIONE.BACKEND

Thiateleu Cleaning Service Backend

Project Overview:

The Thiateleu Cleaning Service Backend is the server-side component of the Thiateleu Cleaning Service Application. It provides APIs for managing clients, services, and appointments. This backend is built using Node.js, Express.js, and MongoDB.

Features:

Client Management: Create, update, and view client information.
Service Management: Add, edit, and view available cleaning services.
Appointment Scheduling: Book, update, and view cleaning appointments.

Technologies Used:

Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Tools: Postman for API testing, MongoDB Compass for data management

Installation:

Clone the Repository
Install Dependencies:
npm install express dotenv mongoose mongodb
npm install nodemon --save-dev

API Endpoints:
GET /api/clients: Retrieve all clients
POST /api/clients: Create a new client
GET /api/appointments: Retrieve all appointments
POST /api/appointments: Create a new appointment
GET /api/services: Retrieve all services
POST /api/services: Add a new service

```

Troubleshooting:
Failed to Fetch: Ensure that the server is running and check CORS settings.
Failed to Fetch in JSON: Verify the API endpoints and data formatting.
CORS Issues: Make sure CORS is configured correctly in the Express middleware.
```
