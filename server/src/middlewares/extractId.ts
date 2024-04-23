import { NextFunction, Request, Response } from "express";

// Extract video ID from YouTube URL

export interface CustomRequest extends Request {
    videoId?: string;
}

export const extractVideoId = (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { videoUrl } = req.body;
        const urlParts = new URL(videoUrl);
        if (urlParts.hostname === 'youtu.be') {
            req.videoId = urlParts.pathname.substring(1);
        }
        if (urlParts.hostname.includes('youtube.com')) {
            const searchParams = new URLSearchParams(urlParts.search);
            req.videoId = searchParams.get('v') || '';
        }
        if (!req.videoId) {
            throw new Error("Video ID not found in the YouTube URL");
        }
        next();
    } catch (error) {
        return res.status(411).json({
            message: "Invalid Youtube URL"
        });
    }
};