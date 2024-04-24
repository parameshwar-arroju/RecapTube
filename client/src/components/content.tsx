import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShortSummary } from "./contentTabs/ShortSummary";
import { LongSummary } from "./contentTabs/LongSummary";
import { KeyInsights } from "./contentTabs/keyInsights";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { shortSummaryAtom, youtubeLinkAtom } from "@/atom/store/atom";
import { Skeleton } from "./ui/skeleton";



export const Content = () => {

    const [shortSummary, setShortSummary] = useRecoilState(shortSummaryAtom)
    const [title, setTitle] = useState("")
    const [imageLink, setImageLink] = useState("")

    const youtubeLink = useRecoilValue(youtubeLinkAtom)

    const [duration, setDuration] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            if (shortSummary == '') {
                try {
                    const response = await axios.post("https://recaptube.onrender.com/summary/short", {
                        videoUrl: youtubeLink
                    })
                    console.log(response)
                    setShortSummary(response.data.summary)
                    setImageLink(response.data.thumbnail)
                    setTitle(response.data.title)
                    setDuration(response.data.duration)
                }
                catch (e) {
                    console.error(e)
                }
            }
        }
        fetchData();

    }, [])
    return (
        <>
            <section className="w-full h-fit pt-12 max-w-screen-2xl mx-auto">
                <div className="px-4 md:px-6 h-fit">
                    <div className="grid items-start gap-6 lg:grid-cols-[400px_1fr] h-fit px-4 lg:gap-12 xl:grid-cols-[550px_1fr]">
                        <div className="aspect-video space-y-4 ">
                            {imageLink ? (
                                <>
                                    <div className="flex flex-col  items-center">
                                        <div className="">
                                            <div className="relative aspect-video max-h-60 space-y-3 mx-auto">
                                                <div className="relative border rounded-xl">
                                                    <img
                                                        alt="YouTube Thumbnail"
                                                        className="aspect-video max-h-60 object-cover mx-auto self-center overflow-hidden rounded-xl"
                                                        src={imageLink}
                                                    />
                                                    <p className="text-center absolute bottom-1 right-1 px-1 leading-none py-1  rounded-sm backdrop-brightness-[.35]  text-base font-medium">{duration}</p>
                                                </div>

                                                <div className="space-y-2">
                                                    <p className="text-xl font-semibold">{title}</p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col  items-center">
                                        <div className="space-y-3">
                                            <Skeleton className="h-[240px] w-[426px] rounded-xl" />
                                            <div className="space-y-2 pr-4">
                                                <Skeleton className="h-4 w-full" />
                                                <Skeleton className="h-4 w-2/5" />
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                            <Tabs className="w-full" defaultValue="short-summary">
                                <TabsList className="grid w-full h-full grid-cols-3 ">
                                    <TabsTrigger className="text-wrap [word-spacing:999px] sm:[word-spacing:normal]" value="short-summary">Short Summary</TabsTrigger>
                                    <TabsTrigger className="text-wrap [word-spacing:999px] sm:[word-spacing:normal]" value="long-summary">Long Summary</TabsTrigger>
                                    <TabsTrigger className="text-wrap [word-spacing:999px] sm:[word-spacing:normal]" value="key-insights">Key Insights</TabsTrigger>
                                </TabsList>
                                <TabsContent value="short-summary">
                                    <Card>
                                        <CardContent className="space-y-2 p-6 text-justify text-lg h-[25rem] overflow-auto">
                                            <ShortSummary />
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="long-summary">
                                    <Card>
                                        <CardContent className="space-y-2 p-6 text-justify text-lg h-[25rem] overflow-auto">
                                            <LongSummary />
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="key-insights">
                                    <Card>
                                        <CardContent className="space-y-2 p-6 text-justify text-lg h-[25rem] overflow-auto">
                                            <KeyInsights />
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
