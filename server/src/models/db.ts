import mongoose from "mongoose";
import "dotenv/config";
import { string } from "zod";

const MoungUrl = process.env.MONGO_URL || "";

mongoose.connect(MoungUrl);

const videoSchema = new mongoose.Schema({
    videoid: {
        type: String,
    },
    transcript: {
        type: String,
    },
    thumbnail: {
        type: String,
    }
});

export const Video = mongoose.model('Videos', videoSchema)