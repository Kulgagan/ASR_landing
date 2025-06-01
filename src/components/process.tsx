import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, MessageSquare, Pencil, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const processVariant: Variants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const processItemVariant: Variants = {
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

const steps = [
    {
        title: "AI Behavioral Interview",
        description: "Our AI conducts a comprehensive behavioral interview, analyzing responses in real-time to assess soft skills and cultural fit.",
        icon: <MessageSquare className="h-8 w-8" />,
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "Interactive Whiteboard",
        description: "Candidates showcase their system design skills on our intuitive whiteboard platform, creating and explaining their architectural decisions.",
        icon: <Pencil className="h-8 w-8" />,
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "AI Technical Assessment",
        description: "Our AI analyzes the whiteboard session and generates personalized technical challenges based on the candidate's system design approach.",
        icon: <BrainCircuit className="h-8 w-8" />,
        color: "from-pink-500/20 to-orange-500/20"
    }
];

const Process = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/80 -z-10" />
            
            <div className="container">
                <motion.div
                    variants={processVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2 
                        variants={processItemVariant}
                        className="text-4xl font-semibold mb-6 md:text-5xl lg:text-6xl"
                    >
                        How Boardly Works
                    </motion.h2>
                    <motion.p 
                        variants={processItemVariant}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Our three-stage interview process combines AI-powered assessment with interactive technical evaluation
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={processVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={processItemVariant}
                            className="relative"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-8 top-24 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-primary/20" />
                            )}
                            
                            <div className={`relative group rounded-2xl p-8 bg-gradient-to-br ${step.color} border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 mb-12`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                                <div className="relative flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={processItemVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to="/pricing">
                        <Button size="lg" className="group bg-purple-600 hover:bg-purple-700">
                            Sign Up
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Process; 