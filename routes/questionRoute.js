const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Example GET route for questions
router.get("/all-questions", (req, res) => {
  res.send("Get all questions");
});


// Example POST route to create a new question
router.post("/create", (req, res) => {
  res.send("Question created");
});

module.exports = router;
