import axios from "axios";
import "dotenv/config";
export const transcriptApi = async (videoId: string): Promise<any> => {
    const params = {
        video_id: videoId,
        lang: "en",
    };
    const headers = {
        "X-RapidAPI-Key": process.env.RapidAPI_Key,
        "X-RapidAPI-Host": process.env.rapidAPI_Host,
    }
    try {
        const response = await axios.get("https://youtube-transcriptor.p.rapidapi.com/transcript", {
            params,
            headers,
        });
        const data = response.data.map((item: any) => item.transcription);
        const subtitles = data.flatMap((transcription: any) =>
            transcription.map((item: any) => item.subtitle).join(" ")
        );
        return subtitles;
    } catch (error) {
        console.error(error);
    }
};
