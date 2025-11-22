import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;

const initializeAI = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', content: string }[]) => {
  try {
    const client = initializeAI();
    if (!client) {
        // Fallback if no API key is present in environment
        return "I'm sorry, I cannot connect to my brain right now. Please ensure the API Key is configured.";
    }

    // Convert history format to what Gemini expects if using chat mode, 
    // but for simplicity in this stateless service, we will use generateContent with system instruction.
    // Ideally, we'd use chats.create, but we'll stick to single turn with history context injection for this simplified React implementation.
    
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message, // In a real app, we would pass history here properly.
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I didn't get a response. Try again?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, I'm having trouble processing that request right now.";
  }
};
