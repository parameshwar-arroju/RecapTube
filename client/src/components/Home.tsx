import { FormEvent, useRef, useState } from "react";
import { Content } from "./content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRecoilState } from "recoil";
import { youtubeLinkAtom } from "@/atom/store/atom";


export const Home = () => {

    const [showContent, setShowContent] = useState(false)
    const [youtubeLink, setYoutubeLink] = useRecoilState(youtubeLinkAtom)
    const [isEmpty, setIsEmpty] = useState(false)

    const InputLinkRef = useRef<HTMLInputElement>(null)

    const HandleLink = () => {
        if (InputLinkRef.current != null && InputLinkRef.current.value != "") {
            setYoutubeLink(InputLinkRef.current.value)
            setShowContent(true)
        }

    }

    return (
        <>
            {console.log(youtubeLink)}
            <section key="1" className="flex flex-col h-[calc(100dvh-5rem)] max-w-screen-2xl mx-auto pt-12">
                <div className=" mx-auto max-w-screen-lg px-12">
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <div className="space-y-2 text-center">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">RecapTube</h1>
                            <p className="max-w-[800px] text-gray-500 md:text-xl lg:text-lg dark:text-gray-400">
                                Summarize YouTube Videos in Seconds
                                Our AI-powered tool analyzes your YouTube videos and generates concise summaries, key insights, and highlights - saving you time and effort.
                            </p>
                        </div>
                        <div className="w-full max-w-screen-lg space-y-2 md:flex md:space-y-0 md:space-x-2">
                            <Input className="w-full md:flex-1" ref={InputLinkRef} placeholder="Paste Youtube video link here..." type="text" />
                            <Button type="submit" onClick={HandleLink} className="w-full sm:w-full md:w-auto">Generate summary</Button>
                        </div>
                        {/* {youtubeLink ? <>
                        </> : <>
                            <div>
                                Fill the link
                            </div>
                        </>
                        } */}
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
