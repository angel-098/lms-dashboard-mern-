import { useEffect, useState } from "react";
import API from "../services/api";

export default function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch lessons
  const fetchLessons = () => {
    API.get("/lessons").then(res => setLessons(res.data));
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  // Add lesson
  const addLesson = () => {
    if (!title.trim()) return;

    API.post("/lessons", { title }).then(() => {
      setTitle("");
      fetchLessons();
    });
  };

  // Mark lesson as completed
  const markCompleted = (id) => {
    API.put(`/lessons/${id}`, { status: "completed" })
      .then(fetchLessons);
  };

  return (
    <div className="main">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Lessons</h1>
      </div>

      {/* Add Lesson Section */}
      <div className="section">
        <h3>Add New Lesson</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addLesson();
          }}
        >
          <input
            type="text"
            placeholder="Lesson title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <button type="submit">Add Lesson</button>
        </form>
      </div>

      {/* Lessons List Section */}
      <div className="section">
        <h3>Lesson List</h3>

        {lessons.length === 0 && (
          <p className="muted-text">No lessons added yet</p>
        )}

        {lessons.map(lesson => (
          <div className="list-item" key={lesson._id}>
            <div className="lesson-info">
              <h4 className="lesson-title">{lesson.title}</h4>

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

            {lesson.status !== "completed" && (
              <button
                className="secondary-btn"
                onClick={() => markCompleted(lesson._id)}
              >
                Mark as Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
