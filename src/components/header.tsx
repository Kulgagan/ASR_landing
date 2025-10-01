//components
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import Logo from "@/components/ui/logo";
import MobileMenu from "./ui/mobileMenu";
import { Link } from "react-router-dom";
import { NavigationMenu } from "@/components/ui/navigation-menu"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

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
                    <div className="max-lg:hidden flex items-center gap-6 mx-auto">
                        <HoverCard>
                            <Link to="/">
                                <HoverCardTrigger asChild>
                                    <Button 
                                        variant="ghost" 
                                        className="hover:underline underline-offset-4 border-0 hover:bg-transparent"
                                        onClick={() => {
                                            const featuresSection = document.getElementById('features');
                                            if (featuresSection) {
                                                featuresSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        Services
                                    </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-64">
                                    <p className="text-sm text-muted-foreground">Explore our premium hauling services and material supply.</p>
                                </HoverCardContent>
                            </Link>
                        </HoverCard>

                        <HoverCard>
                            <Link to="/">
                                <HoverCardTrigger asChild>
                                    <Button 
                                        variant="ghost" 
                                        className="hover:underline underline-offset-4 border-0 hover:bg-transparent"
                                        onClick={() => {
                                            const overviewSection = document.getElementById('overview');
                                            if (overviewSection) {
                                                overviewSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        Why ASR?
                                    </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-64">
                                    <p className="text-sm text-muted-foreground">For startups, enterprises, and hiring managers looking to automate hauls.</p>
                                </HoverCardContent>
                            </Link>
                        </HoverCard>

                        <HoverCard>
                            <Link to="/">
                                <HoverCardTrigger asChild>
                                    <Button 
                                        variant="ghost" 
                                        className="hover:underline underline-offset-4 border-0 hover:bg-transparent"
                                        onClick={() => {
                                            const aboutSection = document.getElementById('about');
                                            if (aboutSection) {
                                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        About
                                    </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-64">
                                    <p className="text-sm text-muted-foreground">Learn more about ASR's mission and team.</p>
                                </HoverCardContent>
                            </Link>
                        </HoverCard>

                        <HoverCard>
                            <Link to="/contact">
                            <HoverCardTrigger asChild>
                                <Button variant="ghost" className="hover:underline underline-offset-4 border-0 hover:bg-transparent">Contact Us</Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-64">
                                <p className="text-sm text-muted-foreground">Contact us for a quote.</p>
                            </HoverCardContent>
                            </Link>
                        </HoverCard>
                    </div>
                </NavigationMenu>

                {/*<div className="flex items-center gap-2 justify-end max-lg:hidden">
                    <Link to="/contact">
                        <Button variant="ghost" className="hover:underline underline-offset-4 border-0 hover:bg-transparent">Contact Us</Button>
                    </Link>
                </div> */}

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
//4. for navigation menu we say max-lg:hidden (hides this on screens that aren't desktops)
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
