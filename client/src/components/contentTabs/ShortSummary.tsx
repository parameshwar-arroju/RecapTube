import { shortSummaryAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { Skeleton } from "@/components/ui/skeleton"

export const ShortSummary = () => {
    const [shortSummary, setShortSummary] = useRecoilState(shortSummaryAtom)
    useEffect(() => {
        const gg = async () => {
            if (shortSummary == '') {
                console.log("backend call")
                setShortSummary("response")
            }
        }
        gg();
    }, [])
    console.log("re-render")
    return (
        <>
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
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                        <div className="space-y-2 w-full" >
                            <Skeleton className="h-4 w-full" />
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