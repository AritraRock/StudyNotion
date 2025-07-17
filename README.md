# 📘 StudyNotion – Online Education Platform (MERN Stack)
![Tech](https://img.shields.io/badge/stack-MERN-informational)
![Status](https://img.shields.io/badge/status-Production-green)

> A full-featured online education platform built with the MERN stack that empowers students and instructors to connect, learn, and grow.

---

## 🔗 Live Links

- **🌐 Live Site**: [Visit StudyNotion](https://study-notion-frontend-nine-wine.vercel.app/)

---

## 📖 Table of Contents

- [📝 Project Description](#-project-description)
- [🧱 System Architecture](#-system-architecture)
- [🎨 Frontend Details](#-frontend-details)
- [🧰 Backend Details](#-backend-details)
- [🧪 API Design](#-api-design)
- [🚀 Deployment Details](#-deployment-details)
- [🧪 Testing Strategy](#-testing-strategy)
- [🌱 Future Enhancements](#-future-enhancements)
- [📷 Architecture Diagram](#-architecture-diagram)

---

## 📝 Project Description

**StudyNotion** is a fully functional ed-tech platform that enables users to **create**, **consume**, and **rate** educational content. Built using the **MERN** stack, it aims to:

- Provide a seamless and engaging learning experience.
- Empower instructors to showcase expertise and reach global learners.

---

## 🧱 System Architecture

StudyNotion follows a **client-server architecture** with three major components:

1. **Frontend (Client)**: React + Redux + Tailwind CSS
2. **Backend (Server)**: Node.js + Express.js
3. **Database**: MongoDB (via MongoDB Atlas)

The frontend communicates with the backend via secure RESTful APIs, and all media is managed via Cloudinary.

---

## 🎨 Frontend Details

The frontend is built with:
- **ReactJS** for UI
- **Redux** for state management
- **Tailwind CSS** for responsive design

### 🔑 Key Pages:

#### 👨‍🎓 Student:
- Homepage
- Course List
- Wishlist
- Cart / Checkout
- Course Content Viewer
- Profile View & Edit

#### 👨‍🏫 Instructor:
- Dashboard
- Course Management
- Insights & Analytics
- Profile View & Edit

#### 🛡️ Admin (Future Scope):
- Platform Insights
- Instructor Management
- User Management

---

## 🧰 Backend Details

The backend uses a **monolithic architecture** built on:

- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose ODM**
- **JWT** for Auth
- **Bcrypt** for Password Security
- **Razorpay** for Payments
- **Cloudinary** for media storage

### 🔐 Features:

- Authentication (Login, Signup, OTP, Forgot Password)
- Course CRUD operations
- Role-based access (Student / Instructor)
- Ratings and Reviews
- Media Uploads
- Razorpay Checkout Integration

### 🗃️ Mongoose Schemas:

- `Student` – name, email, password, courses
- `Instructor` – name, email, password, course info
- `Course` – title, description, content, ratings

---

## 🧪 API Design

Follows **RESTful architecture**, returns **JSON**, and supports standard HTTP methods.

### 🔑 Key Endpoints:

| Method | Endpoint                     | Description                         |
|--------|------------------------------|-------------------------------------|
| POST   | `/api/auth/signup`          | Create new user                     |
| POST   | `/api/auth/login`           | Login + JWT                         |
| POST   | `/api/auth/verify-otp`      | OTP Verification                    |
| POST   | `/api/auth/forgot-password` | Password Reset                      |
| GET    | `/api/courses`              | Get all courses                     |
| GET    | `/api/courses/:id`          | Get course by ID                    |
| POST   | `/api/courses`              | Create a course                     |
| PUT    | `/api/courses/:id`          | Update a course                     |
| DELETE | `/api/courses/:id`          | Delete a course                     |
| POST   | `/api/courses/:id/rate`     | Rate a course                       |

## 🚀 Deployment Details

| Service         | Usage                |
|-----------------|----------------------|
| Vercel          | Frontend Hosting     |
| Render          | Backend Hosting      |
| MongoDB Atlas   | Database             |
| Cloudinary      | Media Storage        |
| Razorpay        | Payment Gateway      |

These tools ensure:

- 🌐 **Scalability**
- 💡 **Availability**
- 🆓 **Free-tier Hosting** (kept awake via **UptimeRobot** and **cron-Job** pings)

---

## 🌱 Future Enhancements

| Feature                                 | Priority |
|-----------------------------------------|----------|
| Personalized Learning Paths             | 🔥 High  |
| AI-Powered Course Recommendations       | 🚀 High  |
| Gamification (Badges, Leaderboards)     | ⚡ Medium |
| Peer-to-Peer & Group Discussions        | ⚡ Medium |

---

## 💬 Contributing

Feel free to **fork** the repository and open **Pull Requests (PRs)**.  
Suggestions, bug reports, and improvements are always welcome!
