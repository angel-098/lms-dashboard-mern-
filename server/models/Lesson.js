const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  title: String,
  status: { type: String, default: "pending" },
  courseId: String,
});

module.exports = mongoose.model("Lesson", LessonSchema);
