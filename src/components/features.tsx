import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const featuresVariant: Variants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.3
        }
    }
}

const featureCardVariant: Variants = {
    start: {
        y: 50,
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

const features = [
    {
        title: "Reliable Hauling Services",
        description: "We provide dependable dump trucking for construction, landscaping, and commercial projects, ensuring your materials are delivered on time, every time.",
        image: "🚚",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "Material Supply",
        description: "From gravel and sand to topsoil and fill dirt, we supply and deliver high-quality materials directly to your job site.",
        image: "⛏️",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Flexible Project Support",
        description: "Whether it’s a single load or ongoing hauling support, our fleet adapts to meet the unique demands of your project schedule.",
        image: "📦",
        color: "from-pink-500/20 to-orange-500/20"
    },
    {
        title: "Transparent Analytics",
        description: "Track deliveries, loads, and project timelines with clear reporting so you always know where your materials are and when they'll arrive.",
        image: "📊",
        color: "from-orange-500/20 to-yellow-500/20"
    }
];


const Features = () => {
    return (
        <section id="features" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/80 -z-10" />
            
            <div className="container">
                <motion.div
                    variants={featuresVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2 
                        variants={featureCardVariant}
                        className="text-4xl font-semibold mb-6 md:text-5xl lg:text-6xl"
                    >
                        Hauling Reimagined.
                    </motion.h2>
                    <motion.p 
                        variants={featureCardVariant}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Our trucks are built to haul, our service is built to last.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={featuresVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 max-w-3xl mx-auto"
                >
                    {features.map((feature, index) => (
                        <div key={index} className="w-full relative">
                            <motion.div
                                variants={featureCardVariant}
                                className={`relative group rounded-2xl p-8 bg-gradient-to-br ${feature.color} border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                                <div className="relative flex items-center gap-8">
                                    <div className="text-5xl">{feature.image}</div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                            
                            {index < features.length - 1 && (
                                <motion.div
                                    variants={featureCardVariant}
                                    className="flex flex-col items-center mt-4"
                                >
                                    <div className="h-8 w-0.5 bg-primary/50"></div>
                                    <ChevronDown className="h-6 w-6 text-primary mt-1" />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    variants={featureCardVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to="/contact">
                        <Button size="lg" className="group">
                            Contact Us
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Features; 