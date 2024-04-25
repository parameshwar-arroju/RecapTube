import { Router, Request, Response } from "express";
import { UrlValidate } from "../middlewares/urlValidator";
import { transcriptApi } from "../services/transcript";
import { summarizeModel } from "../services/summary";
import { CustomRequest, extractVideoId } from "../middlewares/extractId";
import { Video } from "../models/db";

export const SummaryRouter = Router();

const prompts = {
    short: `Generate a short summary based on the provided transcript. Ensure clarity, conciseness, and coherence in your summary in 150 words.`,

    long: `Generate a long summary based on the provided transcript.Ensure clarity, conciseness, and coherence in your summary in 200-300 words.`,

    keyinsight: `Analyzing the provided transcript, identify and discuss the key insights, themes, or significant points presented. Consider the overarching message, main arguments, recurring motifs, and any unique perspectives or revelations that emerge from the text. Craft an insightful analysis that delves into the core ideas conveyed and their implications within the context of the transcript.`
}

SummaryRouter.post("/short", UrlValidate, extractVideoId, async (req: CustomRequest, res: Response) => {


    try {
        // Extract the video ID from the validated YouTube URL
        const videoId = req.videoId;
        const id = await Video.findOne({ videoid: videoId });
        if (id) {
            const summary = await summarizeModel(prompts.short, id.transcript || "");
            // Respond with the video ID
            res.json({
                title: id.title,
                videoId: videoId,
                thumbnail: id.thumbnail,
                duration: id.duration,
                summary: summary,
            });
        }
        else {
            const { title, transcript, thumbnail, duration } = await transcriptApi(videoId);
            const video = await Video.create({
                title: title,
                videoid: videoId,
                thumbnail: thumbnail,
                duration: duration,
                transcript: transcript[0],
            })
            const summary = await summarizeModel(prompts.short, video.transcript || "");
            // Respond with the video ID
            res.json({
                title: title,
                videoId: videoId,
                thumbnail: thumbnail,
                duration: duration,
                summary: summary,
            });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

SummaryRouter.post("/long", UrlValidate, extractVideoId, async (req: CustomRequest, res: Response) => {

    try {
        // Extract the video ID from the validated YouTube URL
        const videoId = req.videoId;
        const id = await Video.findOne({ videoid: videoId });
        // const transcript = await transcriptApi(videoId);
        const summary = await summarizeModel(prompts.long, id?.transcript || "");
        // Respond with the video ID
        res.json({
            videoId: videoId,
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
        const id = await Video.findOne({ videoid: videoId });
        // const transcript = await transcriptApi(videoId);
        const summary = await summarizeModel(prompts.keyinsight, id?.transcript || "");
        // Respond with the video ID
        res.json({
            videoId: videoId,
            summary: summary,
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});