import { longSummaryAtom } from "@/atom/store/atom"
import { useEffect } from "react"
import { useRecoilState } from "recoil"

export const LongSummary = () => {
    const [longSummary, setLongSummary] = useRecoilState(longSummaryAtom)
    useEffect(() => {
        if (longSummary == '') {
            console.log("backend call")
            setLongSummary(`This video guide provides a step-by-step setup for an optimized Rust development environment in Neovim. Here's a summary of the key points:

            Prerequisites:
            
            Install Rust using Rustup.
            Install basic LSP support with Rust Tools.
            
            Debugging Setup:
            
            Install Nvimdap (Debug Adapter Protocol client) and Nvimdap UI (interface enhancements).
            Install CodeLLDB (debugger for compiled languages) via Mason (LSP installation manager).
            
            Configuration:
            
            Configure Rust Tools using a custom Lua configuration file.
            Enable debugging by adding CodeLLDB extension path and install path to the Rust Tools configuration.
            
            Usage:
            
            Run rustup to verify Rust installation.
            Open Rust programs in Neovim to access LSP features (hints, documentation, etc.).
            Use Nvimdap and Nvimdap UI for debugging.
            Set breakpoints, inspect variables, and debug Rust programs efficiently.
            
            Additional Features:
            
            Autofocus for hover actions in Rust Tools.
            Keybindings for common LSP and debugger operations.
            Integration with Lazy (package manager) and Mason for seamless installation and configuration.`)
        }
    }, [])
    console.log("re-render")
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: longSummary }}></div >
        </>
    )
}