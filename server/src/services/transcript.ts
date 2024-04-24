import axios from "axios";
import "dotenv/config";
export const transcriptApi = async (videoId: string | undefined): Promise<any> => {
    const params = {
        video_id: videoId,
        lang: "en",
    };
    const headers = {
        "X-RapidAPI-Key": process.env.RapidAPI_Key,
        "X-RapidAPI-Host": process.env.RapidAPI_Host,
    }
    try {
        const response = await axios.get("https://youtube-transcriptor.p.rapidapi.com/transcript", {
            params,
            headers,
        });
        const title = response.data[0].title;
        const duration = response.data[0].lengthInSeconds;
        const thumbnail = response.data[0].thumbnails[4].url;
        const data = response.data.map((item: any) => item.transcription);
        const transcript = data.flatMap((transcription: any) =>
            transcription.map((item: any) => item.subtitle).join(" ")
        );
        return { title, transcript, thumbnail, duration };
    } catch (error) {
        console.error(error);
        return [];
    }
};
