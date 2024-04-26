import { Link } from "react-router-dom"
import { Icons } from "../Icons"
// import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"


export const MainNav = () => {
    // const { pathname } = useLocation();

    return (
        <>
            <div className="mr-4 flex ">
                <Link to={""} className="mr-6 flex items-center space-x-1">
                    <Icons.logo className="h-6 w-6 " />
                    <span className="text-lg font-bold ">
                        {siteConfig.name}
                    </span>
                </Link>
                {/* <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
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
                </nav> */}
            </div>
        </>
    )
}