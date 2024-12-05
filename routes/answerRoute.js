const express = require("express");
const router = express.Router();

// Example GET route for answers
router.get("/get-answers", (req, res) => {
  res.send("Get all answers");
});
// Retrieves answers for a specific question 
router.get("/:question_id", (req, res) => { 
  console.log("me"); 
  res.send(`Answer for specific question: ${req.params.question_id}`);
})
// Example POST route to create a new answer
router.post("/create", (req, res) => {
  res.send("Answer created");
});

module.exports = router;
