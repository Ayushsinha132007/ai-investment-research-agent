const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend is running successfully",
        port: 5001,
        timestamp: new Date().toISOString()
    });
});

module.exports = router;