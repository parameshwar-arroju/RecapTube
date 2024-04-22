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
exports.SummaryRouter = void 0;
const express_1 = require("express");
const urlValidator_1 = require("../middlewares/urlValidator");
const transcript_1 = require("../services/transcript");
const summary_1 = require("../services/summary");
exports.SummaryRouter = (0, express_1.Router)();
// Extract video ID from YouTube URL
const extractVideoId = (videoUrl) => {
    const urlParts = new URL(videoUrl);
    if (urlParts.hostname === 'youtu.be') {
        return urlParts.pathname.substring(1);
    }
    if (urlParts.hostname.includes('youtube.com')) {
        const searchParams = new URLSearchParams(urlParts.search);
        return searchParams.get('v') || '';
    }
    throw new Error('Invalid YouTube URL');
};
let transcriptText = "";
exports.SummaryRouter.post("/short/:id", urlValidator_1.UrlValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { videoUrl } = req.body;
    try {
        // Extract the video ID from the validated YouTube URL
        // const videoId = extractVideoId(videoUrl);
        const videoId = req.params.id;
        const transcript = yield (0, transcript_1.transcriptApi)(videoId);
        const summary = yield (0, summary_1.summarizeModel)(transcript);
        transcriptText = transcript;
        console.log(transcriptText);
        // Respond with the video ID
        res.json({
            videoId: videoId,
            transcript: transcript,
            summary: summary,
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
exports.SummaryRouter.get("/transcript", (req, res) => {
    res.json({
        transcript: transcriptText
    });
});
