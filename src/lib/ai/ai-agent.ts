import { GoogleGenerativeAI } from "@google/generative-ai";

const prompts = {
  generate_workexperience: `Generate a work experience summary for this section of resume based on the user's description of the job.`,
};

// Base Template
export class AIAgent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  generateWorkExperience(input: string) {}
}

// Google Gemini
export class GeminiAgent implements AIAgent {
  private googleAI;
  private model = "gemini-1.5-flash";
  private agent;
  
  constructor(key: string, model?: string) {
    this.googleAI = new GoogleGenerativeAI(key);
    if (model) {
      this.model = model;
      this.agent = this.googleAI.getGenerativeModel({ model: model });
    } else {
      this.agent = this.googleAI.getGenerativeModel({ model: this.model }); // set to default
    }
  }

  async generateWorkExperience(input: string) {
    const res = await this.agent.generateContent({
      contents: [{ role: "user", parts: [{ text: input }] }],
      systemInstruction: {
        role: "model",
        parts: [{ text: prompts.generate_workexperience }],
      },
    });
    return res.response.text;
  }
}
