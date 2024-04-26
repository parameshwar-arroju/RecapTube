import { Outlet, Link } from "react-router-dom";

import { MainNav } from "./MainNav";
// import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { Icons } from "../Icons";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "../ThemeToggle";

export const Navbar = () => {

    // const { pathname } = useLocation();

    // const [isAuth, setIsAuth] = useState(false)
    // const [menuOpen, setMenuOpen] = useState(false);
    // const navigate = useNavigate()

    // useEffect(() => {
    //     const token = localStorage.getItem('token');

    //     if (token) {
    //         setIsAuth(true)
    //     }
    // }, [])

    // function HandleSignout() {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('author');
    //     setIsAuth(false);
    //     navigate('/')
    // }


    return (
        <>
            <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    {/* <MobileNav /> */}
                    <MainNav />
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">

                        </div>
                        <nav className="flex items-center gap-4" >
                            {/* <div className="flex gap-4">
                                <Link
                                    to="/signin"
                                    className={cn(
                                        "transition-colors hover:text-foreground/80",
                                        pathname === "/signin" ? "text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    Signin
                                </Link>
                            </div> */}
                            <div>
                                <Link
                                    to={"https://github.com/parameshwar-arroju/RecapTube"}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div
                                        className={cn(
                                            buttonVariants({
                                                variant: "ghost",
                                            }),
                                            "w-9 px-0"
                                        )}
                                    >
                                        <Icons.gitHub className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                    </div>
                                </Link>
                                <ThemeToggle />

                            </div>



                        </nav>
                    </div>
                </div>
            </header>
            <div className='pt-14'></div>
            <Outlet />
        </>
    )
}