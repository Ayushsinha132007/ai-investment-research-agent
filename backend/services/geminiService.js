const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Health Check Function
async function testGemini() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say hello to Ayush. Tell him the Gemini API is working.",
  });

  return response.text;
}

// Company Analysis
async function analyzeCompanyWithAI(company) {
  const prompt = `
You are an expert financial analyst.

Analyze the company "${company}".

Return ONLY valid JSON.

Do NOT use markdown.
Do NOT use triple backticks.
Do NOT explain anything.

Response format:

{
  "company": "",
  "decision": "INVEST | HOLD | PASS",
  "confidence": 0,
  "summary": "",
  "pros": [],
  "cons": []
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let text = response.text.trim();

  // Remove markdown if Gemini still sends it
  text = text.replace(/```json/g, "");
  text = text.replace(/```/g, "");
  text = text.trim();

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("JSON Parse Error:", error);

    return {
      company,
      decision: "UNKNOWN",
      confidence: 0,
      summary: text,
      pros: [],
      cons: [],
    };
  }
}

module.exports = {
  testGemini,
  analyzeCompanyWithAI,
};