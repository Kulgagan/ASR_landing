import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { truck2 } from "@/assets";
import { heroData } from "@/constants";
import { staggerContainerSlow, fadeInUp } from "@/lib/animations";

const Hero = () => {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      {/* Full-bleed background image */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img 
          src={truck2} 
          alt="Hero background"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div 
        variants={staggerContainerSlow}
        initial='start'
        animate='end'
        className="container text-center"
      >
        <div className="max-w-screen-md mx-auto">
          <motion.p 
            variants={fadeInUp}
            className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10"
          >
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl"
          >
            {heroData.sectionTitle.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground md:text-xl"
          >
            {heroData.sectionText}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-2 mt-6 md:mt-10"
          >
            <Link to="/contact">
              <Button>Get a Quote</Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;