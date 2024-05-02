import { longAIWrteAtom, longSummaryAtom, youtubeLinkAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Skeleton } from "../ui/skeleton"
import axios from "axios"
import AIWriter from "react-aiwriter"
import Markdown from "react-markdown"

const ApiUrl = import.meta.env.VITE_API_URL;

export const LongSummary = () => {
    const [longSummary, setLongSummary] = useRecoilState(longSummaryAtom)
    const [AIWrite, setAIWrite] = useRecoilState(longAIWrteAtom)
    const youtubeLink = useRecoilValue(youtubeLinkAtom)

    useEffect(() => {
        const fetchData = async () => {
            if (longSummary == '') {
                try {
                    const response = await axios.post(ApiUrl + "/summary/long", {
                        videoUrl: youtubeLink
                    })
                    setLongSummary(response.data.summary)
                }
                catch (e) {
                    console.error(e)
                }
            }
            setAIWrite(prev => prev + 1)
        }
        fetchData();
    }, [])
    return (
        <>
            {longSummary ? (
                <>
                    {AIWrite >= 2 ? (
                        <div className="prose prose-li:marker:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-p:text-foreground">
                            <Markdown>
                                {longSummary}
                            </Markdown>
                        </div>
                    ) : (
                        <div className="prose prose-li:marker:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-p:text-foreground">
                            <AIWriter>
                                <Markdown>
                                    {longSummary}
                                </Markdown>
                            </AIWriter>
                        </div>
                    )}

                </>
            ) : (
                <>
                    <div className="flex flex-col items-center space-y-6 ">
                        <div className="space-y-4 w-full" >
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                        <div className="space-y-4 w-full" >
                            <Skeleton className="h-4 w-full" />
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