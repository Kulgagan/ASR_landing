/*
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "./ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pricingVariant: Variants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const pricingCardVariant: Variants = {
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

const plans = [
    {
        name: "Starter",
        price: "$199",
        originalPrice: "$499",
        description: "Perfect for small teams starting with technical interviews",
        features: [
            "Up to 10 interviews per month",
            "AI behavioral interviews",
            "Basic whiteboard system",
            "Standard technical assessments",
            "Email support",
            "Basic analytics dashboard"
        ],
        buttonText: "Start Free Trial",
        popular: false,
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        name: "Professional",
        price: "$499",
        originalPrice: "$1499",
        description: "Ideal for growing companies with regular hiring needs",
        features: [
            "Up to 50 interviews per month",
            "Advanced AI behavioral interviews",
            "Full whiteboard system",
            "Customized technical assessments",
            "Priority support",
            "Advanced analytics dashboard",
            "Team collaboration features",
            "Custom branding"
        ],
        buttonText: "Start Free Trial",
        popular: true,
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for large organizations",
        features: [
            "Unlimited interviews",
            "Custom AI interview models",
            "Advanced whiteboard features",
            "Custom assessment frameworks",
            "Dedicated support team",
            "Enterprise analytics",
            "API access",
            "Custom integrations",
            "SLA guarantees",
            "On-premise deployment"
        ],
        buttonText: "Contact Sales",
        popular: false,
        color: "from-pink-500/20 to-orange-500/20"
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient }
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/80 -z-10" />
            
            <div className="container">
                <motion.div
                    variants={pricingVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h2 
                        variants={pricingCardVariant}
                        className="text-4xl font-semibold mb-6 md:text-5xl lg:text-6xl"
                    >
                        Simple, Transparent Pricing
                    </motion.h2>
                    <motion.p 
                        variants={pricingCardVariant}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Choose the perfect plan for your hiring needs. All plans include a 14-day free trial.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={pricingVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={pricingCardVariant}
                            className={`relative group rounded-2xl p-8 bg-gradient-to-br ${plan.color} border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 ${
                                plan.popular ? 'md:scale-110' : ''
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                            <div className="relative">
                                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-4xl font-bold">{plan.price}</div>
                                    {plan.originalPrice && (
                                        <div className="text-lg font-normal text-muted-foreground line-through">
                                            {plan.originalPrice}
                                        </div>
                                    )}
                                    <span className="text-lg font-normal text-muted-foreground">/mo</span>
                                </div>
                                <p className="text-muted-foreground mb-6">{plan.description}</p>
                                
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button 
                                    size="lg" 
                                    className="w-full group"
                                    variant={plan.popular ? "default" : "outline"}
                                >
                                    <Link to="/contact" className="flex items-center w-full justify-center">
                                        {plan.buttonText}
                                        {!plan.popular && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={pricingCardVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mt-20 max-w-2xl mx-auto"
                >
                    <div className="relative group rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                        <div className="relative">
                            <h3 className="text-2xl font-semibold mb-4">Intrested in revolutionizing your hiring process?</h3>
                            <p className="text-muted-foreground mb-6">Contact our sales team to discuss your specific requirements and get a tailored quote.</p>
                            <Button 
                                size="lg" 
                                className="group bg-blue-600 hover:bg-blue-700"
                            >
                                <Link to="/contact" className="flex items-center">
                                    Contact Us
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing; 
*/