import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const overviewVariant: Variants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const overviewItemVariant: Variants = {
    start: {
        y: 30,
        opacity: 0,
        filter: "blur(5px)"
    },
    end: {
        y: 0,
        opacity: 1,
        filter: "blur(0)",
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
}

const stats = [
    {
        value: "85%",
        label: "Better Hiring Decisions",
        description: "More accurate candidate assessment through AI analysis"
    },
    {
        value: "60%",
        label: "Time Saved",
        description: "Reduced interview time with automated processes"
    },
    {
        value: "10k+",
        label: "Interviews Conducted",
        description: "Successfully completed technical interviews"
    },
    {
        value: "92%",
        label: "Candidate Satisfaction",
        description: "Positive feedback from interview experience"
    }
];

const Overview = () => {
    return (
        <section id="overview" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/80 -z-10" />
            
            <div className="container">
                <motion.div
                    variants={overviewVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2 
                        variants={overviewItemVariant}
                        className="text-4xl font-semibold mb-6 md:text-5xl lg:text-6xl"
                    >
                        Why Choose Boardly?
                    </motion.h2>
                    <motion.p 
                        variants={overviewItemVariant}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Transform your technical hiring process with our AI-powered interview platform. Get better candidates, faster.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={overviewVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={overviewItemVariant}
                            className="relative group rounded-2xl p-8 bg-gradient-to-br from-background/50 to-background/80 border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="text-4xl font-bold mb-2">{stat.value}</div>
                            <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                            <p className="text-muted-foreground">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={overviewItemVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to="/pricing">
                        <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                            Sign Up
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Overview; 