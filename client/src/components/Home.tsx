import { Content } from "./content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Home = () => {
    return (
        <>
            {/* <div className="flex flex-col h-[calc(100dvh-5rem)] max-w-screen-2xl mx-auto justify-around pt-20 gap-20">
                <div className="container space-y-4 text-center ">
                    <h2 className="text-6xl font-semibold">RecapTube</h2>
                    <p className="text-2xl font-medium text-gray-500">
                        Summarize YouTube Videos in Seconds
                        Our AI-powered tool analyzes your YouTube videos and generates concise summaries, key insights, and highlights - saving you time and effort.
                    </p>
                    <div className="flex max-w-screen-lg mx-auto justify-center items-center space-x-2 ">
                        <Input
                            className=""
                            type="email"
                            placeholder="Email"
                        />
                        <Button type="submit">Generate Summary</Button>
                    </div>
                </div>
                <div className=" p-4">
                    <Content />
                </div>
            </div> */}
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
                            <Input className="w-full md:flex-1" placeholder="Enter your email" type="text" />
                            <Button className="w-full sm:w-full md:w-auto">Generate summary</Button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <Content />
                </div>
            </section>
        </>
    );
};
