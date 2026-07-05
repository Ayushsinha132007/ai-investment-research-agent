const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function testGemini() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Say hello to Ayush. Tell him the Gemini API is working.",
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error.message);
    throw error;
  }
}

module.exports = {
  testGemini,
};