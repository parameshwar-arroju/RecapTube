import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShortSummary } from "./contentTabs/ShortSummary";
import { RecoilRoot } from "recoil";
import { LongSummary } from "./contentTabs/LongSummary";
import { KeyInsights } from "./contentTabs/keyInsights";
import { Icons } from "./Icons";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";



export const Content = () => {

    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState("")
    useEffect(() => {
        setTitle("Roadmap towards Web 3 jobs")
        setDuration("9:36")
    }, [])
    return (
        <>
            <RecoilRoot>

                <section className="w-full h-fit pt-8 max-w-screen-2xl mx-auto">
                    <div className="px-4 md:px-6 h-fit">
                        <div className="grid items-start gap-6 lg:grid-cols-[400px_1fr] h-fit px-4 lg:gap-12 xl:grid-cols-[550px_1fr]">
                            <div className="aspect-video  space-y-4">
                                <p className="text-center text-3xl font-semibold">{title}</p>
                                <div className="relative  aspect-video max-h-60 mx-auto">
                                    <img
                                        alt="YouTube Thumbnail"
                                        className="aspect-video max-h-60 object-cover mx-auto self-center overflow-hidden rounded-md"
                                        src="https://i.ytimg.com/vi/gYK8azCYjnU/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT4v2MpT2InXvK3q857p83SvRSYg
"
                                    />
                                    <p className="text-center absolute bottom-1 right-1 px-1 leading-none py-1  rounded-sm backdrop-brightness-[.35]  text-base font-medium">{duration}</p>
                                </div>

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
                                            <CardContent className="space-y-2 p-6 text-justify text-lg max-h-[25rem] overflow-auto">
                                                <ShortSummary />
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="long-summary">
                                        <Card>
                                            <CardContent className="space-y-2 p-6 text-justify text-lg max-h-[25rem] overflow-auto">
                                                <LongSummary />
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="key-insights">
                                        <Card>
                                            <CardContent className="space-y-2 p-6 text-justify text-lg max-h-[25rem] overflow-auto">
                                                <KeyInsights />
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>
            </RecoilRoot>

        </>
    );
};
