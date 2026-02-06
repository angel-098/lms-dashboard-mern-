const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");
const auth = require("../middleware/authMiddleware");

// ===============================
// PUBLIC ROUTE (NO TOKEN NEEDED)
// GET http://localhost:5000/api/lessons/public
// ===============================
router.get("/public", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// CREATE LESSON (PROTECTED)
// POST http://localhost:5000/api/lessons
// ===============================
router.post("/", auth, async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Lesson title is required" });
    }

    const lesson = new Lesson({
      title,
      status: "pending",
      createdBy: req.user.id,
    });

    const savedLesson = await lesson.save();
    res.status(201).json(savedLesson);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// GET ALL LESSONS (PROTECTED)
// GET http://localhost:5000/api/lessons
// ===============================
router.get("/", auth, async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// UPDATE LESSON STATUS (PROTECTED)
// PUT http://localhost:5000/api/lessons/:id
// ===============================
router.put("/:id", auth, async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
