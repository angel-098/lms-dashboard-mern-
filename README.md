# LMS Dashboard – MERN Stack

A **Learning Management System (LMS) Dashboard** built using the **MERN stack**.  
This application allows users to manage courses and lessons, track lesson completion, and view dashboard statistics with full authentication.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT-based Authentication
- Protected Routes
- Logout Functionality

### 📊 Dashboard
- Total Courses Count
- Total Lessons Count
- Completed Lessons Count
- Active Students (Static)

### 📚 Courses
- Add New Courses (Title, Description, Duration)
- View All Courses
- Public & Protected Course Routes

### 📝 Lessons
- Add Lessons
- Mark Lessons as Completed
- View Lesson Status (Pending / Completed)

### 👤 Profile
- View User Profile Details
- Edit Profile (Frontend Only)

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 🔗 API Endpoints

### Authentication
- **POST** `/api/auth/register` – Register User
- **POST** `/api/auth/login` – Login User

### Courses
- **POST** `/api/courses` – Add Course (Protected)
- **GET** `/api/courses` – Get All Courses (Protected)
- **GET** `/api/courses/public` – Get Courses (Public)

### Lessons
- **POST** `/api/lessons` – Add Lesson (Protected)
- **GET** `/api/lessons` – Get Lessons (Protected)
- **PUT** `/api/lessons/:id` – Update Lesson Status (Protected)
- **GET** `/api/lessons/public` – Get Lessons (Public)

---


---

## 📸 Screenshots

All required **UI screenshots** and **API testing screenshots (Postman)** are available in the **`screenshots`** folder.

---

## ▶️ How to Run the Project

### Backend

- cd server
- npm install
- node index.js

---

### Frontend

- cd client
- npm install
- npm start