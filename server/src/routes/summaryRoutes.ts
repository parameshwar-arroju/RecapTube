import { Router, Request, Response } from "express";
import { UrlValidate } from "../middlewares/urlValidator";
import { transcriptApi } from "../services/transcript";
import { summarizeModel } from "../services/summary";
import { CustomRequest, extractVideoId } from "../middlewares/extractId";

export const SummaryRouter = Router();

const prompts = {
    short: `create a short summary derived from a YouTube transcript, encapsulating the central ideas and arguments presented within.`,

    long: `create a long summary derived from a YouTube transcript, encapsulating the central ideas and arguments presented within.`,

    keyinsight: `create a keyinsights derived from a YouTube transcript, encapsulating the central ideas and arguments presented within.`
}

SummaryRouter.post("/short", UrlValidate, extractVideoId, async (req: CustomRequest, res: Response) => {


    try {
        // Extract the video ID from the validated YouTube URL
        const videoId = req.videoId;
        const transcript = await transcriptApi(videoId);
        const summary = await summarizeModel(prompts.short, transcript);
        // Respond with the video ID
        res.json({
            videoId: videoId,
            summary: summary,
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

SummaryRouter.post("/long", UrlValidate, extractVideoId, async (req: CustomRequest, res: Response) => {

    try {
        // Extract the video ID from the validated YouTube URL
        const videoId = req.videoId;
        const transcript = await transcriptApi(videoId);
        const summary = await summarizeModel(prompts.long, transcript);
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

SummaryRouter.post("/key", UrlValidate, extractVideoId, async (req: CustomRequest, res: Response) => {

    try {
        // Extract the video ID from the validated YouTube URL
        const videoId = req.videoId;
        const transcript = await transcriptApi(videoId);
        const summary = await summarizeModel(prompts.keyinsight, transcript);
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