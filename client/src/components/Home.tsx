import { Content } from "./content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Home = () => {
    return (
        <>
            <div className="flex flex-col h-[calc(100dvh-5rem)] justify-around pt-20 gap-20">
                <div className="space-y-4 text-center">
                    <h2 className="text-6xl font-semibold">RecapTube</h2>
                    <p className="text-2xl font-medium text-gray-500">
                        Get Your Youtube Video Summary
                    </p>
                    <div className="flex w-screen justify-center items-center space-x-2">
                        <Input
                            className="w-2/5"
                            type="email"
                            placeholder="Email"
                        />
                        <Button type="submit">Generate Summary</Button>
                    </div>
                </div>
                <div className="flex-grow p-4">
                    <Content />
                </div>
            </div>
        </>
    );
};
