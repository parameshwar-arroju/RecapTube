import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Link, LinkProps } from "react-router-dom"
import { cn } from "@/lib/utils"
import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { Icons } from "../Icons"
import { ScrollArea } from "../ui/scroll-area"
import { MenuIcon } from "lucide-react"

export const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    >
                        <MenuIcon />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0">
                    <MobileLink
                        to="/"
                        className="flex items-center"
                        onOpenChange={setOpen}
                    >
                        <Icons.logo className="mr-2 h-4 w-4" />
                        <span className="font-bold">{siteConfig.name}</span>
                    </MobileLink>
                    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                        <div className="flex flex-col space-y-3">
                            {docsConfig.mainNav?.map(
                                (item) =>
                                    item.href && (
                                        <MobileLink
                                            key={item.href}
                                            to={item.href}
                                            onOpenChange={setOpen}
                                        >
                                            {item.title}
                                        </MobileLink>
                                    )
                            )}
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </>
    )
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({ to, onOpenChange, className, children, ...props }: MobileLinkProps) {

    return (
        <Link
            to={to}
            onClick={(e) => {
                e.preventDefault(); // Prevent default anchor link behavior
                window.location.href = to.toString();
                onOpenChange && onOpenChange(false);
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}