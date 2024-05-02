import { keyAIWrteAtom, keyInsightsAtom, youtubeLinkAtom } from "@/atom/store/atom"
import axios from "axios"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Skeleton } from "../ui/skeleton"
import AIWriter from "react-aiwriter"
import Markdown from "react-markdown"

const ApiUrl = import.meta.env.VITE_API_URL;

export const KeyInsights = () => {
    const [keyInsights, setKeyInsights] = useRecoilState(keyInsightsAtom)
    const [AIWrite, setAIWrite] = useRecoilState(keyAIWrteAtom)
    const youtubeLink = useRecoilValue(youtubeLinkAtom)
    useEffect(() => {
        const fetchData = async () => {
            if (keyInsights == '') {
                try {
                    const response = await axios.post(ApiUrl + "/summary/key", {
                        videoUrl: youtubeLink
                    })
                    setKeyInsights(response.data.summary)
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
            {keyInsights ? (
                <>
                    {AIWrite >= 2 ? (
                        <div className="prose-base prose prose-li:marker:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-p:text-foreground">
                            <Markdown>
                                {keyInsights}
                            </Markdown>
                        </div>
                    ) : (
                        <div className="prose prose-li:marker:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-p:text-foreground">
                            <AIWriter>
                                <Markdown>
                                    {keyInsights}
                                </Markdown>
                            </AIWriter>
                        </div>
                    )}

                </>
            ) : (
                <>
                    <div className="flex flex-col items-center space-y-6">
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