export const sendMessageToGemini = async (
  message: string, 
  history: { role: 'user' | 'model', content: string }[]
) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'API request failed');
    }

    const data = await response.json();
    return data.text || "I didn't get a response. Try again?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, I'm having trouble processing that request right now.";
  }
};
