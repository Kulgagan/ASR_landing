// assets
import { logo } from "@/assets";   // importing logo from the assets module

type LogoProps = {
    variant?: 'default' | 'icon';   // defines the optional prop 'variant' which can be 'default' or 'icon'
}

const Logo = ({variant = 'default'}: LogoProps) => {    // destructuring 'variant' with a default value of 'default'
    return (
        <a href="/" className="block">
            {variant === 'default' && (     // if variant is 'default', render the full logo
                <img src={logo} alt="Boardly Logo" width={170} height={40}/>
            )}

            {variant === 'icon' && (    // if variant is 'icon', render the smaller favicon
                <img src={logo} alt="Boardly Logo" width={160} height={32}/>
            )}
        </a>
    )
}

export default Logo
