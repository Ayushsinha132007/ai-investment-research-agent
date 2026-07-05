const { analyzeCompanyWithAI } = require("../services/geminiService");

const analyzeCompany = async (req, res) => {
  try {
    const { company } = req.body;

    if (!company) {
      return res.status(400).json({
        success: false,
        message: "Company name is required",
      });
    }

    const result = await analyzeCompanyWithAI(company);

    res.json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  analyzeCompany,
};