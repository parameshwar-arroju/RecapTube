import { shortSummaryAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { Skeleton } from "@/components/ui/skeleton"

export const ShortSummary = () => {
    const [shortSummary, setShortSummary] = useRecoilState(shortSummaryAtom)
    useEffect(() => {
        const gg = async () => {
            if (shortSummary == '') {
                console.log("backend call")

                setShortSummary("This video guides viewers on setting up a Rust development environment in Neovim, enhancing their coding experience with syntax highlighting, LSP support, debugging, and more. The setup involves installing Rust and Rust tools, configuring Neovim with nvimdap and nvimdap UI for debugging, and using code lldb for debugging functionality. By leveraging Mason, a package manager for Neovim LSP installations, and LSP Saga for connecting LSP functionality, the setup provides an efficient and accessible workflow for Rust developers. The video highlights the importance of debuggers in compiled languages like Rust and demonstrates how to effectively integrate them into Neovim.")
            }
        }
        gg();
    }, [])
    console.log("re-render")
    return (
        <>
            {shortSummary ? (
                <>
                    <div className="h-full"> {shortSummary}</div>
                </>
            ) : (
                <>
                    <div className="flex flex-col items-center space-y-6 px-8">
                        <div className="space-y-2 w-full" >
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                        <div className="space-y-2 w-full" >
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />

                            <Skeleton className="h-4 w-1/4" />
                        </div>

                    </div>

                </>
            )}


        </>
    )
}