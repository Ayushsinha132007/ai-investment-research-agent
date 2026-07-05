const express = require("express");
const router = express.Router();

const { testGemini } = require("../services/geminiService");

router.get("/", async (req, res) => {
  try {
    const aiResponse = await testGemini();

    res.json({
      status: "OK",
      message: "Backend is running successfully",
      ai: aiResponse,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: error.message,
    });
  }
});

module.exports = router;