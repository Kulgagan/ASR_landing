//components
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import Logo from "@/components/ui/logo";
import MobileMenu from "./ui/mobileMenu";
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

//assets
import { Menu } from "lucide-react";
//constants
import { navMenu } from "@/constants";

const Header = () => { 
    return (
        <header className="h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
            <div className="container flex justify-between lg:grid lg:grid-cols-[1fr,3fr,1fr]">
                <Link to="/">
                    <Logo variant="icon"/>
                </Link>

                <NavigationMenu className="max-lg:hidden mx-auto">  
                    <NavigationMenuList>
                        {navMenu.map(({href, label, submenu}, index) => (   //looping over every nav item in navMenu. if it has a submenu, render dropdown, if not render link
                            <NavigationMenuItem key={index}>
                                {submenu ? ( //renders label if subMenu exists
                                <>
                                    <NavigationMenuTrigger>
                                        {label}
                                    </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid grid-cols-2 p-2 w-[640px]">
                                                {submenu.map(({href, icon, label, desc}, index)=> (
                                                    <li key={index}>
                                                        <NavigationMenuLink asChild> 
                                                            <Link 
                                                            to={href}
                                                            className="flex gap-3 select-none p-2 rounded-sm transition-colors hover:bg-foreground/5">
                                                                <div className="w-10 h-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center">
                                                                {icon}
                                                                </div>

                                                                <div>
                                                                    <div className="text-[13px] leading-normal mb-1">
                                                                        {label}
                                                                    </div>

                                                                    <p className="text-[13px] leading-normal text-muted-foreground">
                                                                        {desc}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                             </ul>
                                        </NavigationMenuContent>
                                </>
                                ) : (   //renders only button of subMenu doesnt exist
                                    <NavigationMenuLink 
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                    >
                                        <Link to={href}>{label}</Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                
                <div className="flex items-center gap-2 justify-end max-lg:hidden">
                    <Button variant="ghost">Sign in</Button>
                    <Link to="/pricing">
                        <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
                    </Link>
                </div>

            <Popover>
                <PopoverTrigger asChild>
                    <Button 
                variant="outline"
                size='icon'
                className="lg:hidden">
                <Menu/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden">
                    <MobileMenu navMenu={navMenu}/>
                </PopoverContent>
            </Popover>
            </div>
        </header>
    )
}

export default Header; 


//Explanations

//1. Importing components from ui and data from nav menu(used in header)
//2. use flex container for mobile. Use lg: for big screens. (lg: uses a 3 column layout [logo, nav, buttons]) [1fr, 3fr, 1fr] => left logo and right menu 20%. middle 60%
//3. selecting 'icon' instead of 'default'
//4. for navigation menu we say max-lg:hidden (hides this on screens that arent desktops)
//5. navMenu is an array
//6. subMenu ? (...) : (...) 
    //{submenu ? (
        // render dropdown
    //  ) : (
        // render single link
    //  )}
//7. NavigationMenuTrigger == the pressable button
//8. NavigationMenuContent == dropdown that appears
//9. href makes the text a pressable link for another page of website
//10. Each submenu item has a <li> that holds a styled link which has icon box, label, desc
