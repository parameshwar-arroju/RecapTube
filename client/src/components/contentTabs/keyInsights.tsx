import { keyInsightsAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import { useRecoilState } from "recoil"


export const KeyInsights = () => {
    const [keyInsights, setKeyInsights] = useRecoilState(keyInsightsAtom)
    useEffect(() => {
        if (keyInsights == '') {
            console.log("backend call")
            setKeyInsights("response")
        }
    }, [])
    console.log("re-render")
    return (
        <>
            <div>{keyInsights}</div>
        </>
    )
}