import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Button } from "./button"

interface LogoProps {
    variant?: "default" | "icon"
    className?: string
}

const Logo = ({ variant = "default", className }: LogoProps) => {
    return (
        <Link to="/">
            <Button variant="ghost" className={cn("hover:bg-transparent", className)}>
                {variant === "default" ? (
                    <span className="text-xl font-semibold">Boardly</span>
                ) : (
                    <span className="text-xl font-semibold">B</span>
                )}
            </Button>
        </Link>
    )
}

export default Logo
