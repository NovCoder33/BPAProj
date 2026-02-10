const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all forum posts
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM forum_posts ORDER BY created_at DESC",
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Create new forum post
router.post("/", async (req, res) => {
  try {
    const { author, topic, content } = req.body;

    if (!author || !topic || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const [result] = await db.query(
      "INSERT INTO forum_posts (author, topic, content, replies) VALUES (?, ?, ?, ?)",
      [author, topic, content, 0],
    );

    res.status(201).json({
      id: result.insertId,
      author,
      topic,
      content,
      replies: 0,
      timestamp: "Just now",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

module.exports = router;
