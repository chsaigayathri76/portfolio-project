const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

// MongoDB connection + server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log("DB Error:", err);
  });

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});