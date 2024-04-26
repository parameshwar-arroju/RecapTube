import { shortAIWrteAtom, shortSummaryAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Skeleton } from "@/components/ui/skeleton"
import AIWriter from "react-aiwriter"
import Markdown from 'react-markdown'


export const ShortSummary = () => {
    const shortSummary = useRecoilValue(shortSummaryAtom)
    const [AIWrite, setAIWrite] = useRecoilState(shortAIWrteAtom)


    useEffect(() => {
        setAIWrite(prev => prev + 1)
    }, [])

    return (
        <>
            {shortSummary ? (
                <>
                    {AIWrite >= 2 ? (
                        <div className="prose prose-li:marker:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-p:text-foreground">
                            <Markdown>
                                {shortSummary}
                            </Markdown>



                        </div>
                    ) : (
                        <div className="prose prose-li:marker:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-p:text-foreground">
                            <AIWriter>
                                <Markdown>
                                    {shortSummary}
                                </Markdown>
                            </AIWriter>
                        </div>
                    )}

                </>
            ) : (
                <>
                    <div className="flex flex-col items-center space-y-6 pt-4">
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