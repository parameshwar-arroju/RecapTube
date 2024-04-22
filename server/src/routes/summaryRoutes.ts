import { Router, Request, Response } from "express";
import { UrlValidate } from "../middlewares/urlValidator";
import { transcriptApi } from "../services/transcript";
import { summarizeModel } from "../services/summary";

export const SummaryRouter = Router();

// Extract video ID from YouTube URL
const extractVideoId = (videoUrl: string): string => {
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


SummaryRouter.post("/short", UrlValidate, async (req: Request, res: Response) => {
    const { videoUrl } = req.body;

    try {
        // Extract the video ID from the validated YouTube URL
        const videoId = extractVideoId(videoUrl);
        const transcript = await transcriptApi(videoId);
        const summary = await summarizeModel(transcript);
        // Respond with the video ID
        res.json({
            videoId: videoId,
            transcript: transcript,
            summary: summary,
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

