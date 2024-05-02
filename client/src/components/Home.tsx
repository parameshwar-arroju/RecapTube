import { ChangeEvent, useState } from "react";
import { Content } from "./content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isErrorAtom, keyInsightsAtom, longSummaryAtom, shortSummaryAtom, youtubeLinkAtom } from "@/atom/store/atom";
import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { Icons } from "./Icons";
import { useToast } from "@/components/ui/use-toast"


// for dots

export const Home = () => {

    const { toast } = useToast()

    const [showContent, setShowContent] = useState(false)
    const [youtubeLink, setYoutubeLink] = useRecoilState(youtubeLinkAtom)
    const [spinner, setSpinner] = useState(false)
    const [validLink, setValidLink] = useState(false)
    const [invalidLink, setInvalidLink] = useState(false)
    const setShort = useSetRecoilState(shortSummaryAtom)
    const setLong = useSetRecoilState(longSummaryAtom)
    const setKey = useSetRecoilState(keyInsightsAtom)

    const [isError, setIsError] = useRecoilState(isErrorAtom)

    const HandleLink = async () => {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/
        setIsError(false)
        setShort("")
        setLong("")
        setKey("")

        if (youtubeLink == '') {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Input field cannot be Empty",
            })
        } else {
            setValidLink(false)
            setInvalidLink(false)
            setSpinner(true)
            await new Promise((r) => setTimeout(r, 1000))
            setSpinner(false)
            if (youtubeRegex.test(youtubeLink)) {
                setValidLink(true);
                setShowContent(true)

            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Please Enter a valid URL!",
                })
                setInvalidLink(true);
            }

        }
    }

    const HandleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setYoutubeLink(e.target.value)
        setInvalidLink(false)
        setValidLink(false)
    }

    return (
        <>
            {isError ? (
                <>
                    {toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "The Provided URL cannot be summarized",
                    })}
                    {setValidLink(false)}
                    {setInvalidLink(true)}
                    {setTimeout(() => setShowContent(false), 1000)}
                    {setIsError(false)}

                </>
            ) : null}
            <section key="1" className="flex flex-col h-[calc(100dvh-5rem)] max-w-screen-2xl mx-auto pt-10">
                <div className=" mx-auto max-w-screen-lg px-4 md:px-12">
                    <div className="flex flex-col items-center justify-center ">
                        <div className="space-y-4 text-center">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">RecapTube</h1>
                            <p className="max-w-[800px] text-gray-500 md:text-xl lg:text-lg dark:text-gray-400">
                                Summarize YouTube Videos in Seconds.
                                Our AI-powered tool analyzes your YouTube videos and generates concise summaries, key insights, and highlights - saving you time and effort.
                            </p>
                        </div>
                        <div className="w-full mt-6 max-w-screen-lg space-y-2 md:flex md:space-y-0 md:space-x-2">
                            <div className="w-full md:flex-1 flex">
                                <Input className={`w-full md:flex-1 ${spinner || validLink || invalidLink ? "border-r-0 rounded-tr-none rounded-br-none" : ""}`} onChange={(e) => HandleChange(e)} placeholder="Paste Youtube video link here..." type="text" />

                                {spinner && <div className={`h-9 px-2 border border-l-0 border-input rounded-tr-md rounded-br-md`}>
                                    <Icons.spinner className={`h-9 w-4 self-center animate-spin`} />
                                </div>}

                                {validLink && <div className={`h-9 px-2 border border-l-0 border-input rounded-tr-md rounded-br-md`}>
                                    <CheckBadgeIcon className={`h-9 w-4 self-center`} />
                                </div>}

                                {invalidLink && <div className={`h-9 px-2 border border-l-0 border-input rounded-tr-md rounded-br-md `}>
                                    <XCircleIcon className={`h-9 w-4 self-center text-destructive`} />
                                </div>}
                            </div>

                            <Button type="submit" disabled={(validLink || invalidLink)} onClick={HandleLink} className={"w-full sm:w-full md:w-auto " + ((validLink || invalidLink) ? "cursor-not-allowed" : "cursor-default")}>Generate summary</Button>
                        </div>
                    </div>
                </div>

                {
                    showContent &&
                    <div className="flex-1 md:p-4">
                        <Content />
                    </div>
                }
            </section>
        </>
    );
};
