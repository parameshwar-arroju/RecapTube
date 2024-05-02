import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShortSummary } from "./contentTabs/ShortSummary";
import { LongSummary } from "./contentTabs/LongSummary";
import { KeyInsights } from "./contentTabs/keyInsights";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { isErrorAtom, keyInsightsAtom, longSummaryAtom, shortSummaryAtom, youtubeLinkAtom } from "@/atom/store/atom";
import { Skeleton } from "./ui/skeleton";
import { Clipboard } from "lucide-react";
import { Button } from "./ui/button";
import { CheckIcon } from "lucide-react";

const ApiUrl = import.meta.env.VITE_API_URL;


export const Content = () => {



  const [shortSummary, setShortSummary] = useRecoilState(shortSummaryAtom)
  const longSummary = useRecoilValue(longSummaryAtom)
  const keyInsights = useRecoilValue(keyInsightsAtom)

  const [currentTabIndex, setCurrentTabIndex] = useState("short-summary");
  const [title, setTitle] = useState("")
  const [imageLink, setImageLink] = useState("")
  const [isError, setIsError] = useRecoilState(isErrorAtom)
  const youtubeLink = useRecoilValue(youtubeLinkAtom)
  const [copied, setCopied] = useState(false)

  const [duration, setDuration] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      if (shortSummary == '') {
        try {
          const response = await axios.post(ApiUrl + "/summary/short", {
            videoUrl: youtubeLink
          })
          setShortSummary(response.data.summary)
          setImageLink(response.data.thumbnail)
          setTitle(response.data.title)
          setDuration(response.data.duration)
        }
        catch (e) {
          setIsError(true)
          console.error(e)
        }
      }
    }
    fetchData();

  }, [])

  const HandleSelect = (value: string) => {
    setCurrentTabIndex(value); // Update the current tab index
  };

  const CopyToClipboard = async () => {
    setCopied(true)
    let content = '';

    // Determine the content based on the selected tab
    switch (currentTabIndex) {
      case "short-summary":
        content = shortSummary;
        break;
      case "long-summary":
        content = longSummary;
        break;
      case "key-insights":
        content = keyInsights;
        break;
      default:
        break;
    };

    content = content.replace(/[_*~`]/g, '');




    // Copy the content to clipboard
    navigator.clipboard.writeText(content)
      .then(() => console.log('Copied to clipboard'))
      .catch((error) => console.error('Failed to copy:', error));

    await new Promise((r) => setTimeout(r, 1000))
    setCopied(false)

  };

  const formatDuration = (totalSeconds: string) => {
    const seconds = Number(totalSeconds);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  };


  if (isError) {
    return (

      <>
        <div>

        </div>
      </>
    )
  }

  return (
    <>
      <section className="w-full h-fit pt-12 max-w-screen-2xl mx-auto">
        <div className="md:px-6 h-fit">
          <div className="grid items-start gap-6 lg:grid-cols-[400px_1fr] h-fit px-4 lg:gap-12 xl:grid-cols-[550px_1fr]">
            <div className="aspect-video space-y-4 pt-10 ">
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
                          <p className="text-center absolute bottom-1 right-1 px-1 leading-none py-1  rounded-sm backdrop-brightness-[.35] tracking-wider text-base font-medium">{formatDuration(duration)}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xl px-3 font-semibold">{title}</p>
                        </div>
                      </div>

                    </div>

                  </div>

                </>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <div className="space-y-3">
                      <Skeleton className="h-[222px] w-[394px] rounded-xl" />
                      <div className="space-y-2 pr-4 pb-2 px-3">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-2/5" />
                      </div>
                    </div>

                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <Tabs className="w-full relative" onValueChange={HandleSelect} defaultValue="short-summary">
                <TabsList className="grid w-full h-full grid-cols-3 ">
                  <TabsTrigger className="text-wrap [word-spacing:999px] sm:[word-spacing:normal]" value="short-summary">Short Summary</TabsTrigger>
                  <TabsTrigger className="text-wrap [word-spacing:999px] sm:[word-spacing:normal]" value="long-summary">Long Summary</TabsTrigger>
                  <TabsTrigger className="text-wrap [word-spacing:999px] sm:[word-spacing:normal]" value="key-insights">Key Insights</TabsTrigger>
                </TabsList>

                <TabsContent value="short-summary">
                  <Card>
                    <CardContent className="scrollbar flex flex-col p-6 px-4 md:px-6 text-pretty h-[25rem] overflow-auto ">
                      <ShortSummary />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="long-summary">
                  <Card>
                    <CardContent className="scrollbar space-y-2 p-6 px-4 md:px-6 text-pretty h-[25rem] overflow-auto">
                      <LongSummary />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="key-insights">
                  <Card>
                    <CardContent className="scrollbar space-y-2 p-6 px-4 md:px-6 text-pretty h-[25rem] overflow-auto">
                      <KeyInsights />
                    </CardContent>
                  </Card>
                </TabsContent>
                <div className="absolute bottom-4 right-4">

                  <Button onClick={CopyToClipboard} className="py-1 px-2 transition duration-500 ease-in-out">
                    {copied ? <CheckIcon className="h-5 w-5 text-end cursor-pointer" />
                      :
                      <Clipboard className="h-5 w-5 text-end cursor-pointer" />
                    }


                  </Button>

                </div>

              </Tabs>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
