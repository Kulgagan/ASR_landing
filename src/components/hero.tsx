//node module 
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom"

//Components
import { Button } from "./ui/button"
//assests
import { heroBanner } from "@/assets"

//Constants
import { heroData } from "@/constants"

//Framer motion varaints
const heroVariant: Variants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.4
        }
    }
}

const heroChildVariant: Variants = {
    start: {
        y: 30,
        opacity: 0, 
        filter: "blur(5px)"
    },
    end: {
        y: 0, 
        opacity: 1, 
        filter: 'blur(0)', 
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    },
}

const Hero = () => {
    return (
        <section className="py-10 md:py-16">
            <motion.div 
            variants={heroVariant}
            initial='start'
            animate='end'
            className="container text-center">
                <div className="max-w-screen-md mx-auto">
                    <motion.p 
                    variants={heroChildVariant}
                    className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full boarder-t border-blue-500/10 backdrop-blur-3x1 mb-6 md:mb-10">
                        {heroData.sectionSubtitle}
                    </motion.p>

                    <motion.h2 
                    variants={heroChildVariant}
                    className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl"
                    >
                    {heroData.sectionTitle.map((line, idx) => (
                        <span key={idx} className="block">
                        {line}
                        </span>
                    ))}
                    </motion.h2>


                    <motion.p 
                    variants={heroChildVariant}
                    className="text-muted-foreground md:text-xl">{heroData.sectionText}</motion.p>

                    <motion.div
                    variants={heroChildVariant}
                    className="flex justify-center gap-2 mt-6 md:mt-10">
                        <Link to="/pricing">
                            <Button className="bg-blue-600 hover:bg-blue-700">View Pricing</Button>
                        </Link>
                        
                        {/* Watch Demo Button - Preserved for future use
                        <Dialog>
                            <DialogTrigger asChild>
                            <Button 
                            variant="ghost">
                                <CirclePlay/> Watch Demo</Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-[600px]">
                                <AspectRatio ratio={16/9}>
                                    <ReactPlayer url="https://www.youtube.com/watch?v=jT4sfTJjOSM" style={{
                                        minWidth: "100%",
                                        maxWidth: "100%",
                                        minHeight: "100%",
                                        maxHeight: "100%",
                                    }}/>
                                </AspectRatio>
                            </DialogContent>
                        </Dialog>  
                        */}
                    </motion.div>
                </div>

                <div className="relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16">
                    <motion.figure 
                    className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden"
                    initial={{
                        y:120,
                        opacity: 0, 
                        filter: 'blur(5px)'
                    }}
                    animate={{
                        y:0,
                        opacity:1, 
                        filter: 'blur(0)',

                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: 'backInOut'
                    }}
                    >
                        <img 
                        src={heroBanner} 
                        width={1468} 
                        height={815} 
                        alt="Boardly dashboard" />
                    </motion.figure>
{/* Blurry glow */}
                    <motion.div 
                    className="absolute bg-blue-600 inset-5 blur-[50px] -z-10"
                    initial={{
                        scale: 0.8,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1, 
                        opacity: 1, 

                    }}
                    transition={{
                        duration: 2, 
                        delay: 0.5,
                        ease: 'backInOut'
                    }}

                    ></motion.div>
                    <motion.div 
                    className="absolute inset-0 bg-blue-600 blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
                    initial={{
                        scale:0.4, 
                        opacity: 0
                    }}
                    animate={{
                        scale: 1, 
                        opacity: 1
                    }}
                    transition={{
                        duration: 2,
                        delay: 1.5,
                        ease: "backInOut"

                    }}
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero

//outer div controls the padding, width, background
//p renders paragraph. h2 renders a main heading. Title of the hero section
//span used to highlight or decorate part of title

/*
    Blue (blue-600/blue-700)
    Green (green-600/green-700)
    Red (red-600/red-700)
    Orange (orange-600/orange-700)
    Pink (pink-600/pink-700)
    Indigo (indigo-600/indigo-700)
    Cyan (cyan-600/cyan-700) */