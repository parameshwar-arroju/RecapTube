import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { CircleUser, Github, Menu, Package2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {

    const [isAuth, setIsAuth] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuth(true)
        }
    }, [])

    // function HandleSignout() {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('author');
    //     setIsAuth(false);
    //     navigate('/')
    // }


    return (
        <>
            <header className="fixed top-0 left-0 right-0 flex h-16 justify-around items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        to="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        Settings
                    </Link>
                </nav>

                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <Link to="https://github.com/parameshwar-arroju/RecapTube" className="hover:text-foreground">
                        <Github />
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <ThemeToggle />
                    {/* <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    to="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    to="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Dashboard
                                </Link>

                                <Link to="#" className="hover:text-foreground">
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet> */}
                    <Sheet key="right">
                        <SheetTrigger asChild>
                            <Button variant="outline"><Menu className="h-5 w-5" /></Button>
                        </SheetTrigger>
                        <SheetContent side="right">

                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    to="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    to="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Dashboard
                                </Link>

                                <Link to="#" className="hover:text-foreground">
                                    Settings
                                </Link>
                            </nav>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetContent>
                    </Sheet>
                </div>

            </header>
            <div className=' pt-20'></div>
            <Outlet />
        </>
    )
}