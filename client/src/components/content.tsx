import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShortSummary } from "./contentTabs/ShortSummary";
import { RecoilRoot } from "recoil";
import { LongSummary } from "./contentTabs/LongSummary";
import { KeyInsights } from "./contentTabs/keyInsights";
import { Icons } from "./Icons";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";



export const Content = () => {

    const [title, setTitle] = useState("")
    useEffect(() => {

        setTitle("Roadmap towards Web 3 jobs")
    }, [])
    return (
        <>
            <RecoilRoot>

                <div className="flex justify-center items-center gap-8 h-full max-w-screen-2xl mx-auto">
                    <div className=" aspect-video h-60 space-y-2">
                        <div className="text-2xl font-semibold text-center">{title}</div>
                        <div className="outline outline-2 rounded-md">
                            <img
                                className="aspect-video max-h-full "
                                src="https://i.ytimg.com/vi/gYK8azCYjnU/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT4v2MpT2InXvK3q857p83SvRSYg"
                                alt="Thumbnail"
                            />
                        </div>

                    </div>
                    <div className="w-3/5 h-full shadow-2xl">
                        <Tabs
                            defaultValue="Short Summary"
                            className="flex flex-col h-full justify-center "
                        >
                            <div className="flex justify-center">
                                <TabsList className="w-fit px-4 py-5 ">
                                    <TabsTrigger value="Short Summary">
                                        Short Summary
                                    </TabsTrigger>
                                    <TabsTrigger value="Long Summary">
                                        Long Summary
                                    </TabsTrigger>
                                    <TabsTrigger value="Key Insights">
                                        Key Insights
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                            <div className="h-full flex-grow">
                                <TabsContent className="h-full py-4 px-6  border rounded-md" value="Short Summary">
                                    <ShortSummary />
                                </TabsContent>
                                <TabsContent className="h-full py-4 px-6 border rounded-md" value="Long Summary">

                                    <LongSummary />

                                </TabsContent>
                                <TabsContent className="h-full py-4 px-6 border rounded-md" value="Key Insights">

                                    <KeyInsights />

                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </RecoilRoot>

        </>
    );
};
