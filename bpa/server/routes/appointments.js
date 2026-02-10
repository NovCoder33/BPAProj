const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM appointments ORDER BY created_at DESC",
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

// Create new appointment
router.post("/", async (req, res) => {
  try {
    const { name, email, date, time, issue } = req.body;

    // Validate input
    if (!name || !email || !date || !time || !issue) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const [result] = await db.query(
      "INSERT INTO appointments (name, email, date, time, issue, status) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, date, time, issue, "pending"],
    );

    res.status(201).json({
      id: result.insertId,
      name,
      email,
      date,
      time,
      issue,
      status: "pending",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create appointment" });
  }
});

module.exports = router;
