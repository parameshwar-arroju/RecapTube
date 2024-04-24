import { useState } from "react";
import { Content } from "./content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRecoilState } from "recoil";
import { youtubeLinkAtom } from "@/atom/store/atom";
import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { Icons } from "./Icons";


export const Home = () => {

    const [showContent, setShowContent] = useState(false)
    const [youtubeLink, setYoutubeLink] = useRecoilState(youtubeLinkAtom)
    const [spinner, setSpinner] = useState(false)
    const [validLink, setValidLink] = useState(false)
    const [invalidLink, setInvalidLink] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const HandleLink = async () => {
        if (youtubeLink == '') {
            setIsEmpty(true);
        } else {
            setValidLink(false)
            setInvalidLink(false)
            const randomValue1 = Math.random() > 0.5;
            const randomValue2 = !randomValue1;
            setSpinner(true)

            await new Promise((r) => setTimeout(r, 3000))
            setSpinner(false)
            setValidLink(randomValue1)
            setInvalidLink(randomValue2)
            setShowContent(true)
            setIsEmpty(false);
        }

    }

    return (
        <>
            {console.log(youtubeLink)}
            <section key="1" className="flex flex-col h-[calc(100dvh-5rem)] max-w-screen-2xl mx-auto pt-12">
                <div className=" mx-auto max-w-screen-lg px-12">
                    <div className="flex flex-col items-center justify-center ">
                        <div className="space-y-2 text-center">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">RecapTube</h1>
                            <p className="max-w-[800px] text-gray-500 md:text-xl lg:text-lg dark:text-gray-400">
                                Summarize YouTube Videos in Seconds
                                Our AI-powered tool analyzes your YouTube videos and generates concise summaries, key insights, and highlights - saving you time and effort.
                            </p>
                        </div>
                        <div className="w-full mt-6 max-w-screen-lg space-y-2 md:flex md:space-y-0 md:space-x-2">
                            <div className="w-full md:flex-1 md:flex">
                                <Input className={`w-full md:flex-1 ${spinner || validLink || invalidLink ? "border-r-0 rounded-tr-none rounded-br-none" : ""}`} onChange={(e) => setYoutubeLink(e.target.value)} placeholder="Paste Youtube video link here..." type="text" />

                                {spinner && <div className={`h-full px-2 border border-l-0 border-input rounded-tr-md rounded-br-md ${spinner ? "" : "hidden"}`}>
                                    <Icons.spinner className={`h-full w-4 self-center text-destructive" ${spinner ? "animate-spin" : ""}`} />
                                </div>}

                                {validLink && <div className={`h-full px-2 border border-l-0 border-input rounded-tr-md rounded-br-md ${validLink ? "" : "hidden"}`}>
                                    <CheckBadgeIcon className={`h-full w-4 self-center text-destructive" ${validLink ? "" : ""}`} />
                                </div>}

                                {invalidLink && <div className={`h-full px-2 border border-l-0 border-input rounded-tr-md rounded-br-md ${invalidLink ? "" : "hidden"}`}>
                                    <XCircleIcon className={`h-full w-4 self-center text-destructive" ${invalidLink ? "" : ""}`} />
                                </div>}


                            </div>

                            <Button type="submit" disabled={showContent} onClick={HandleLink} className={"w-full sm:w-full md:w-auto " + (showContent ? "cursor-not-allowed" : "")}>Generate summary</Button>
                        </div>
                        {invalidLink && <p className="text-destructive self-start pl-4 pt-1">Invalid URL !</p>}
                        {isEmpty && <p className="text-destructive self-start pl-4 pt-1">Input is empty!</p>}
                    </div>
                </div>

                {
                    showContent &&
                    <div className="flex-1 p-4">
                        <Content />
                    </div>
                }
            </section>
        </>
    );
};
