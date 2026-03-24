const express = require("express");

const app = express();
const PORT = 3000;

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "DevOps API is running 🚀",
    status: "success"
  });
});

// About endpoint
app.get("/about", (req, res) => {
  res.json({
    name: "Rahul Khatavkar",
    role: "Full Stack / DevOps Learner",
    version: "1.0.0"
  });
});

// Health check endpoint (VERY IMPORTANT)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
