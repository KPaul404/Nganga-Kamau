import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

export default async function handler(req: any, res: any) {
  // Enable CORS for your frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: { systemInstruction: AI_SYSTEM_INSTRUCTION }
    });
    
    res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error("Error communicating with Gemini:", error);
    res.status(500).json({ error: 'Failed to process request', details: error.message });
  }
}
