require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5001;

const healthRoute = require("./routes/health");

app.use(cors());
app.use(express.json());

app.use("/health", healthRoute);

app.get("/", (req, res) => {
  res.send("AI Investment Research Agent Backend 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});