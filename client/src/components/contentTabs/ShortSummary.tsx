import { shortSummaryAtom, youtubeLinkAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Skeleton } from "@/components/ui/skeleton"
import axios from "axios"

export const ShortSummary = () => {
    const [shortSummary, setShortSummary] = useRecoilState(shortSummaryAtom)
    const youtubeLink = useRecoilValue(youtubeLinkAtom)

    useEffect(() => {
        const gg = async () => {
            if (shortSummary == '') {
                const response = await axios.post("https://recaptube.onrender.com/summary/short", {
                    videoUrl: youtubeLink
                })
                console.log(response)
                setShortSummary(response.data.summary)
            }
        }
        gg();
    }, [])
    return (
        <>
            {console.log("rerender")}
            {shortSummary ? (
                <>
                    <div className="h-full"> {shortSummary}</div>
                </>
            ) : (
                <>
                    <div className="flex flex-col items-center space-y-6 px-8">
                        <div className="space-y-2 w-full" >
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                        <div className="space-y-2 w-full" >
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />

                            <Skeleton className="h-4 w-1/4" />
                        </div>

                    </div>

                </>
            )}


        </>
    )
}