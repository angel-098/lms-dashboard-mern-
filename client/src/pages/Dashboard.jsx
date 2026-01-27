import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    API.get("/courses").then(res => setCourses(res.data));
    API.get("/lessons").then(res => setLessons(res.data));
  }, []);

  const completedLessons = lessons.filter(
    l => l.status === "completed"
  ).length;

  return (
    <div className="main">
      <h1 className="page-title">Dashboard</h1>

      {/* Stats Cards */}
      <div className="cards">
        <div className="card">
          <h4>Total Courses</h4>
          <p>{courses.length}</p>
        </div>

        <div className="card">
          <h4>Total Lessons</h4>
          <p>{lessons.length}</p>
        </div>

        <div className="card">
          <h4>Completed Lessons</h4>
          <p>{completedLessons}</p>
        </div>

        <div className="card">
          <h4>Active Students</h4>
          <p>120</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="section">
        <h3>Welcome to the LMS Dashboard 🎓</h3>
        <p style={{ color: "#6b7280", marginTop: "6px" }}>
          Manage courses, lessons, and track progress easily.
        </p>
      </div>

      {/* Recent Data */}
      <div className="cards">
        <div className="section">
          <h3>Recent Courses</h3>
          {courses.length === 0 ? (
            <p>No courses added yet</p>
          ) : (
            courses.slice(0, 3).map(course => (
              <div key={course._id} className="list-item">
                <span>{course.title}</span>
                <span className="status progress">Active</span>
              </div>
            ))
          )}
        </div>

        <div className="section">
          <h3>Recent Lessons</h3>
          {lessons.length === 0 ? (
            <p>No lessons added yet</p>
          ) : (
            lessons.slice(0, 3).map(lesson => (
              <div key={lesson._id} className="list-item">
                <span>{lesson.title}</span>
                <span
                  className={`status ${
                    lesson.status === "completed"
                      ? "completed"
                      : "pending"
                  }`}
                >
                  {lesson.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
