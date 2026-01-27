const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const courseRoutes = require("./routes/courseRoutes");
const lessonRoutes = require("./routes/lessonRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/courses", courseRoutes);
app.use("/api/lessons", lessonRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
