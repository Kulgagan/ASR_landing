import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
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
        title: "AI Behavioral Interview",
        description: "Our AI interviewer conducts comprehensive behavioral interviews, analyzing responses in real-time to assess soft skills and cultural fit.",
        image: "🤖",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "Interactive Whiteboard",
        description: "Candidates showcase their system design skills on our intuitive whiteboard platform, creating and explaining their architectural decisions.",
        image: "📝",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "AI Technical Assessment",
        description: "Our AI analyzes the whiteboard session and generates personalized technical challenges based on the candidate's system design approach.",
        image: "🎯",
        color: "from-pink-500/20 to-orange-500/20"
    },
    {
        title: "Comprehensive Analytics",
        description: "Get detailed insights into candidate performance across all three stages, with AI-powered recommendations and scoring.",
        image: "📊",
        color: "from-orange-500/20 to-yellow-500/20"
    }
];

const Features = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/80 -z-10" />
            
            <div className="container">
                <motion.div
                    variants={featuresVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h2 
                        variants={featureCardVariant}
                        className="text-4xl font-semibold mb-6 md:text-5xl lg:text-6xl"
                    >
                        Revolutionizing Technical Interviews
                    </motion.h2>
                    <motion.p 
                        variants={featureCardVariant}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        A three-stage interview process that combines AI-powered behavioral assessment, interactive system design, and personalized technical challenges.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={featuresVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={featureCardVariant}
                            className={`relative group rounded-2xl p-8 bg-gradient-to-br ${feature.color} border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 ${
                                index === 4 ? 'md:col-span-2 md:max-w-[50%] md:ml-auto' : ''
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                            <div className="relative">
                                <div className="text-5xl mb-6">{feature.image}</div>
                                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={featureCardVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mt-20"
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

export default Features; 