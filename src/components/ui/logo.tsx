import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Button } from "./button"
import logo from "@/assets/logo.png"

interface LogoProps {
    variant?: "default" | "icon"
    className?: string
}

const Logo = ({ variant = "default", className }: LogoProps) => {
    return (
        <Link to="/">
            <Button variant="ghost" className={cn("hover:bg-transparent", className)}>
                {variant === "default" ? (
                    <img src={logo} alt="Boardly Logo" className="h-14" />
                ) : (
                    <img src={logo} alt="Boardly Logo" className="h-12" />
                )}
            </Button>
        </Link>
    )
}

export default Logo
