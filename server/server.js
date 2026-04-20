require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// Test route
app.get("/add", async (req, res) => {
  const Project = require("./models/Project");

  await Project.insertMany([
    { title: "Portfolio Website", description: "React + Node + MongoDB" },
    { title: "Todo App", description: "Task manager using React" },
    { title: "Weather App", description: "Fetch weather using API" }
  ]);

  res.send("Projects Added");
});

// Routes
app.use("/api/projects", projectRoutes);

// Contact
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Message received");
});

// PORT FIX 

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});