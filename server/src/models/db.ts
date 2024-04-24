import mongoose from "mongoose";
import "dotenv/config";
import { number, string } from "zod";

const MoungUrl = process.env.MONGO_URL || "";

mongoose.connect(MoungUrl);

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    videoid: {
        type: String,
    },
    transcript: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    duration: {
        type: String,
    }
});

export const Video = mongoose.model('Videos', videoSchema)