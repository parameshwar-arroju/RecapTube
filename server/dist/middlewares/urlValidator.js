"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlValidate = void 0;
const zod_1 = require("zod");
const UrlValidate = (req, res, next) => {
    try {
        const { videoUrl } = req.body;
        const urlSchema = zod_1.z.string().refine((videoUrl) => {
            const reqExp = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/;
            return reqExp.test(videoUrl);
        }, { message: "Invalid Youtube URL" });
        urlSchema.parse(videoUrl);
        next();
    }
    catch (error) {
        return res.status(411).json({
            message: "Invalid Youtube URL"
        });
    }
};
exports.UrlValidate = UrlValidate;
