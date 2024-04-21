import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Content = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-8 h-full">
                <div className="aspect-video h-60 ">
                    <img
                        className="aspect-video max-h-full "
                        src="https://i.ytimg.com/vi/gYK8azCYjnU/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT4v2MpT2InXvK3q857p83SvRSYg"
                        alt="Thumbnail"
                    />
                </div>
                <div className="w-3/5 h-full shadow-2xl shadow-red-900 pt-2">
                    <Tabs
                        defaultValue="Short Summary"
                        className="flex flex-col justify-center "
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
                        <div className="p-6">
                            <TabsContent value="Short Summary">
                                Make changes to your account here.Make changes
                                to your account here.Make changes to your
                                account here.Make changes to your account
                                here.Make changes to your account here.Make
                                changes to your account here.
                            </TabsContent>
                            <TabsContent value="Long Summary">
                                Change your password here.
                            </TabsContent>
                            <TabsContent value="Key Insights">
                                Change your password here.
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    );
};
