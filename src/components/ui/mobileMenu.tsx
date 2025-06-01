//components
import { Button } from "./button"
import { Link } from "react-router-dom"
//types
import type { MenuItem } from "@/types"

type MobileMenuProps = {
    navMenu: MenuItem[]
}

const MobileMenu = ({navMenu}: MobileMenuProps) => {
    const handleClick = (href: string, label: string) => {
        if (href === '/' && label === 'Product') {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (href === '/' && label === 'Solutions') {
            const overviewSection = document.getElementById('overview');
            if (overviewSection) {
                overviewSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-[200px]">
            <ul className="space-y-2">
                {navMenu.map(({href, label}, index) => (
                    <li key={index}>
                        <Button 
                            asChild
                            variant='ghost'
                            className="w-full justify-between"
                            onClick={() => handleClick(href, label)}
                        >
                            <Link to={href}>{label}</Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenu

//very similar to header.txs file. 
//this just uses collabsible instead of NavigationMenu