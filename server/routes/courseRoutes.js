const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// POST course
// URL → POST http://localhost:5000/api/courses
router.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all courses
// URL → GET http://localhost:5000/api/courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
