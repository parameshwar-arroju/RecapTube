import "dotenv/config";

export const summarizeModel = async (desc: string,transcript: string): Promise<any> => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const generationConfig = {
        temperature: 0.9,
        topP: 0.1,
        topK: 16,
    };
    
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    try {
        async function run() {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });

            const prompt = `${desc}
            Transcript: ${transcript}`

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            return text;
        }
        const shortSummary = run();
        return shortSummary;
    } catch (error) {
        console.error(error);
    }
};