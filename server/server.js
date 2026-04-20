require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Project = require("./models/Project");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ CONNECT DATABASE FIRST
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// ✅ ROUTES AFTER CONNECTION
app.get("/add", async (req, res) => {
  await Project.insertMany([
    {
      title: "Portfolio Website",
      description: "React + Node + MongoDB"
    },
    {
      title: "Todo App",
      description: "Task manager using React"
    },
    {
      title: "Weather App",
      description: "Fetch weather using API"
    }
  ]);

  res.send("Projects Added");
});
app.post("/contact", async (req, res) => {
  console.log(req.body);
  res.send("Message received");
});

app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});