import { GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold } from '@google/generative-ai';
  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyAuU643FF-iArnxbIE2W7_b7Qvl6qB95tE";
  
  async function runChat(prompt) {
    // Initialize the generative AI client
    const genAI = new GoogleGenerativeAI(API_KEY);
  
    // Load the model
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    // Set the generation configuration
    const generationConfig = {
      temperature: 0.9, // Overheating temperature, you might want to lower it to a realistic value (e.g., 1.0)
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    // Set safety settings
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    // Start a new chat session
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });
  
    // Send a message to the model
    const result = await chatSession.sendMessage(prompt);
  
    // Get the response
    const response = result.response;
   console.log(response.text()); // Output the result response
    return response.text();
  }
  // Run the chat function
  export default runChat;
  