import { Link, useLocation } from "react-router-dom"
import { siteConfig } from "@/config/site"
import { Icons } from "../Icons"
import { cn } from "@/lib/utils"


export const MainNav = () => {
    const { pathname } = useLocation();

    return (
        <>
            <div className="mr-4 flex ">
                <Link to="/" className="mr-6 flex items-center space-x-2">
                    <Icons.logo className="h-9 rounded-sm" />
                </Link>
                <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
                    <Link
                        to="/docs"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        Docs
                    </Link>
                    <Link
                        to="/docs/components"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/docs/components")
                                ? "text-foreground"
                                : "text-foreground/60"
                        )}
                    >
                        Components
                    </Link>
                </nav>
            </div>
        </>
    )
}