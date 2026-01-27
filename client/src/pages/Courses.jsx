import { useEffect, useState } from "react";
import API from "../services/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const fetchCourses = () => {
    API.get("/courses").then(res => setCourses(res.data));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const addCourse = () => {
    if (!title || !description || !duration) return;

    API.post("/courses", { title, description, duration }).then(() => {
      setTitle("");
      setDescription("");
      setDuration("");
      fetchCourses();
    });
  };

  return (
    <div className="main">
      <h1 className="page-title">Courses</h1>

      {/* ADD COURSE */}
      <div className="section">
        <h3>Add New Course</h3>

        <div className="form-vertical">
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Duration (e.g. 4 hours)"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />

          <textarea
            placeholder="Course Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <button className="primary-btn" onClick={addCourse}>
            + Add Course
          </button>
        </div>
      </div>

      {/* COURSE LIST */}
      <div className="section">
        <h3>Available Courses</h3>

        {courses.length === 0 && (
          <p className="muted-text">No courses added yet</p>
        )}

        {courses.map(course => (
          <div className="list-item" key={course._id}>
            <div>
              <h4>{course.title}</h4>
              <p className="muted-text">{course.description}</p>
            </div>

            <span className="status progress">
              {course.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
