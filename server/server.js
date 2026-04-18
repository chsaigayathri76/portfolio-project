const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ Allow all origins (for now)
app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000; // ✅ important for deployment
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ Allow all origins (for now)
app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000; // ✅ important for deployment
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));