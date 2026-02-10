const express = require("express");
const cors = require("cors");
require("dotenv").config();

const testimonialsRoutes = require("./routes/testimonials");
const appointmentsRoutes = require("./routes/appointments");
const postsRoutes = require("./routes/posts");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/posts", postsRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
