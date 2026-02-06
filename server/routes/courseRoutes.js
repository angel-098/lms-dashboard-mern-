const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const auth = require("../middleware/authMiddleware");

// ===============================
// PUBLIC ROUTE (NO TOKEN NEEDED)
// GET http://localhost:5000/api/courses/public
// ===============================
router.get("/public", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// CREATE COURSE (PROTECTED)
// POST http://localhost:5000/api/courses
// ===============================
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, duration } = req.body;

    if (!title || !description || !duration) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const course = new Course({
      title,
      description,
      duration,
      createdBy: req.user.id,
    });

    const savedCourse = await course.save();
    res.status(201).json(savedCourse);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// GET ALL COURSES (PROTECTED)
// GET http://localhost:5000/api/courses
// ===============================
router.get("/", auth, async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
