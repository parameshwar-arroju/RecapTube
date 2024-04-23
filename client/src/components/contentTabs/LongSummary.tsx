import { longSummaryAtom, youtubeLinkAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import axios from "axios"
import { useRecoilState, useRecoilValue } from "recoil"

export const LongSummary = () => {
    const [longSummary, setLongSummary] = useRecoilState(longSummaryAtom)
    const youtubeLink = useRecoilValue(youtubeLinkAtom)
    useEffect(() => {
        const gg = async () => {
            if (longSummary == '') {
                const response = await axios.post("https://recaptube.onrender.com/summary/short", {
                    videoUrl: youtubeLink
                })
                setLongSummary(response.data.summary)
            }
        }
        gg();
    }, [])
    console.log("re-render")
    return (
        <>
            <div>{longSummary}</div>
        </>
    )
}