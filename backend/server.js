const express = require("express");

const app = express();

const PORT = 5001;

// Import Routes
const healthRoute = require("./routes/health");

// Middleware
app.use(express.json());

// Routes
app.use("/health", healthRoute);

// Home Route
app.get("/", (req, res) => {
    res.send("AI Investment Research Agent Backend 🚀");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});