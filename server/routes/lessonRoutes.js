const express = require("express");
const Lesson = require("../models/Lesson");
const router = express.Router();

// POST lesson
// URL → POST http://localhost:5000/api/lessons
router.post("/", async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    const savedLesson = await lesson.save();
    res.status(201).json(savedLesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all lessons
// URL → GET http://localhost:5000/api/lessons
router.get("/", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE lesson status
// URL → PUT http://localhost:5000/api/lessons/:id
router.put("/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
