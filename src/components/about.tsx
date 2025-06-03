import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const aboutVariant: Variants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const aboutItemVariant: Variants = {
    start: {
        y: 30,
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

const values = [
    {
        title: "Our Mission",
        description: "To revolutionize technical hiring by making it more efficient, fair, and insightful through AI-powered assessment.",
        icon: <Target className="h-8 w-8" />,
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "Our Team",
        description: "A diverse group of tech enthusiasts, AI experts, and HR professionals working together to transform the hiring landscape.",
        icon: <Users className="h-8 w-8" />,
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Our Impact",
        description: "We've helped thousands of companies make better hiring decisions and provided a better experience for candidates worldwide.",
        icon: <Award className="h-8 w-8" />,
        color: "from-pink-500/20 to-orange-500/20"
    }
];

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/80 -z-10" />
            
            <div className="container">
                <motion.div
                    variants={aboutVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2 
                        variants={aboutItemVariant}
                        className="text-4xl font-semibold mb-6 md:text-5xl lg:text-6xl"
                    >
                        About Boardly
                    </motion.h2>
                    <motion.p 
                        variants={aboutItemVariant}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        We're on a mission to transform technical hiring through innovative AI-powered solutions
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={aboutVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={aboutItemVariant}
                            className={`relative group rounded-2xl p-8 bg-gradient-to-br ${value.color} border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                            <div className="relative">
                                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={aboutItemVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="relative group rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 max-w-3xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                        <div className="relative">
                            <h3 className="text-2xl font-semibold mb-4">Join Our Journey</h3>
                            <p className="text-muted-foreground mb-6">Be part of the future of technical hiring. Experience how AI can transform your recruitment process.</p>
                            <Link to="/contact">
                                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 