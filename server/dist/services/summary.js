"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeModel = void 0;
require("dotenv/config");
const summarizeModel = (transcript) => __awaiter(void 0, void 0, void 0, function* () {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    try {
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                // For text-only input, use the gemini-pro model
                const model = genAI.getGenerativeModel({ model: "gemini-pro" });
                const prompt = `Create a short summary derived from a YouTube transcript, encapsulating the central ideas and arguments presented within.
            
            Transcript: ${transcript}`;
                const result = yield model.generateContent(prompt);
                const response = yield result.response;
                const text = response.text();
                return text;
            });
        }
        const shortSummary = run();
        return shortSummary;
    }
    catch (error) {
        console.error(error);
    }
});
exports.summarizeModel = summarizeModel;
