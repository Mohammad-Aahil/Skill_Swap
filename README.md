SkillSwap
A MERN Stack peer-to-peer skill exchange platform where users can offer their skills, discover other learners, and exchange knowledge through a structured request system.

Features
Authentication
User Registration
User Login
Password Hashing using bcrypt
JWT Authentication
Protected Routes
Current Authenticated User Endpoint
User Profile
Update Profile
Bio
Location
Skills Offered
Skills Wanted
Skill Discovery
Search Users by Skills
Browse Available Skill Profiles
Skill Requests
Send Skill Exchange Requests
View Incoming Requests
Request Status Tracking
Accept Requests
Reject Requests
Tech Stack
Frontend (Planned)
React
React Router
Context API / Zustand
Tailwind CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
Authentication
JWT (JSON Web Token)
bcryptjs
Project Structure
server/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
│
├── server.js
└── .env
API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
Users
PUT /api/users/profile
GET /api/users/search?skill=React
Requests
POST /api/requests
GET /api/requests/incoming
PATCH /api/requests/:id/accept
PATCH /api/requests/:id/reject
Learning Goals
This project was built to gain hands-on experience with:

REST API Design
Authentication & Authorization
JWT Workflow
MongoDB Relationships
Express Middleware
Request Lifecycle Management
MERN Stack Project Architecture
Development Roadmap
Backend
Authentication System
User Profiles
Skill Search
Request Creation
Incoming Requests
Dashboard Analytics
Notifications
Frontend
React Setup
Authentication UI
Profile Management
Skill Search Interface
Request Inbox
Dashboard
Author
Aahil

Built as a MERN Stack learning project focused on real-world backend architecture and feature-driven development.
