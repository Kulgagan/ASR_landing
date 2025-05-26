//components
import { ChevronsUpDown } from "lucide-react"
import { Button } from "./button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@radix-ui/react-separator"
import { Link } from "react-router-dom"
//types
import type { MenuItem } from "@/types"

type MobileMenuProps = {
    navMenu: MenuItem[]
}

const MobileMenu = ({navMenu}: MobileMenuProps) => {
    return (
        <div className="w-[200px]">
            <ul className="mb-3">
                {navMenu.map(({href, label, submenu}, index) => ( //looping over every nav item in navMenu. if it has a submenu, render dropdown, if not render link
                    <li key={index}>
                        {submenu ? ( //renders label if subMenu exists
                           <Collapsible>
                           <CollapsibleTrigger asChild>
                                <Button 
                                variant='ghost'
                                className="w-full justify-between"
                                >
                                {label}
                                <ChevronsUpDown/>
                                </Button>
                           </CollapsibleTrigger>
                           <CollapsibleContent className="ps-2">
                                <ul className="border-l border-l-muted-foreground/2">
                                    {submenu.map(({href, label}, index) => (
                                        <li key={index}>
                                            <Button 
                                            asChild 
                                            variant="ghost" 
                                            className="w-full justify-between">
                                                <Link to={href}>{label}</Link>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                           </CollapsibleContent>
                           </Collapsible>
                            
                        ) :
                            <Button 
                            asChild
                            variant='ghost'
                            className="w-full justify-between">
                            <Link to={href}>{label}</Link>
                            </Button>
                        }
                    </li>
                ))}
            </ul>

            <Separator className="bg-muted-foreground/20" />

            <div className="flex items-center gap-2 mt-4">
                <Button 
                variant="ghost"
                className="w-full"
                >
                    Sign in
                </Button>

                <Link to="/pricing" className="w-full">
                    <Button className="w-full">Free Trial</Button>
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu

//very similar to header.txs file. 
//this just uses collabsible instead of NavigationMenu