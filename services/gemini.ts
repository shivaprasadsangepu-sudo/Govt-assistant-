
import { GoogleGenAI } from "@google/genai";
import { UserProfile, GovJob } from "../types";

// Always use the named parameter for apiKey and rely exclusively on process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIEligibilitySummary = async (user: UserProfile, job: GovJob) => {
  try {
    const prompt = `
      User Profile: 
      - Age: ${user.age}
      - Gender: ${user.gender}
      - Education: ${user.education}
      - Caste: ${user.caste}
      - State: ${user.state}
      - Income: ${user.annualIncome}

      Job Details:
      - Title: ${job.title}
      - Description: ${job.description}
      - Min Age: ${job.minAge}, Max Age: ${job.maxAge}
      - Required Education: ${job.education.join(', ')}

      Analyze the user's eligibility for this job. Provide a friendly, encouraging summary (max 2 sentences) 
      of why they should or should not apply, and one specific tip for their application.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        // When setting maxOutputTokens, thinkingBudget must also be set for Gemini 3 models
        maxOutputTokens: 200,
        thinkingConfig: { thinkingBudget: 100 },
      }
    });

    // Directly access the .text property from the response
    return response.text || "AI analysis unavailable.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Unable to generate AI summary at this time.";
  }
};
