const express = require("express");

const router = express.Router();

const { analyzeCompany } = require("../controllers/analyzeController");

router.post("/", analyzeCompany);

module.exports = router;