import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const UrlValidate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { videoUrl } = req.body;
        const urlSchema = z.string().refine(
            (videoUrl) => {
                const reqExp = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/;
                return reqExp.test(videoUrl);
            },
            { message: "Invalid Youtube URL" }
        );
        urlSchema.safeParse(videoUrl);
        next();
    } catch (error) {
        return res.status(411).json({
            message: "Invalid Youtube URL"
        });
    }
};
