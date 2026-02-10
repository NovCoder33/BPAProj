const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all testimonials
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM testimonials ORDER BY created_at DESC",
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

// Create new testimonial
router.post("/", async (req, res) => {
  try {
    const { name, condition, story, years, rating } = req.body;

    // Validate input
    if (!name || !condition || !story || !years) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const [result] = await db.query(
      "INSERT INTO testimonials (name, condition_type, story, years, rating) VALUES (?, ?, ?, ?, ?)",
      [name, condition, story, years, rating || 5],
    );

    res.status(201).json({
      id: result.insertId,
      name,
      condition,
      story,
      years,
      rating: rating || 5,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create testimonial" });
  }
});

module.exports = router;
