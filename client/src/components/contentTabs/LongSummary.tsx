import { longSummaryAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import { useRecoilState } from "recoil"

export const LongSummary = () => {
    const [longSummary, setLongSummary] = useRecoilState(longSummaryAtom)
    useEffect(() => {
        if (longSummary == '') {
            console.log("backend call")
            setLongSummary("response")
        }
    }, [])
    console.log("re-render")
    return (
        <>
            <div>{longSummary}</div>
        </>
    )
}