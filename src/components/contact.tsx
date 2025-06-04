import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactVariant: Variants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const contactCardVariant: Variants = {
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

const teamMembers = [
    {
        name: "Adil Sajid",
        role: "CTO",
        email: "adilsajid452@gmail.com",
        location: "Edmonton, AB",
        linkedin: "linkedin.com"
    },
    {
        name: "Kulgagan Bajwa",
        role: "CEO",
        email: "kulgagan08@gmail.com",
        location: "Edmonton, AB",
        linkedin: "linkedin.com/in/kulgagan"
    },
    {
        name: "Hammad Zubair",
        role: "COO",
        email: "hammadzubair@hotmail.com",
        location: "Edmonton, AB",
        linkedin: "linkedin.com/in/hammad-zubair-20a2a6344"
    }
];

const Contact = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/80 -z-10" />
            
            <div className="container">
                <motion.div
                    variants={contactVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h2 
                        variants={contactCardVariant}
                        className="text-4xl font-semibold mb-6 md:text-5xl lg:text-6xl"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p 
                        variants={contactCardVariant}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Our team is here to help you transform your hiring process. Reach out to us for any questions or to schedule a demo.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={contactVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={contactCardVariant}
                            className="relative group rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                            <div className="relative">
                                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-primary mb-6">{member.role}</p>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                                            {member.email}
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        <span>{member.location}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Linkedin className="h-5 w-5 text-primary" />
                                        <a href={`https://${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={contactCardVariant}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mt-20 max-w-2xl mx-auto"
                >
                    <div className="relative group rounded-2xl p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
                        <div className="relative">
                            <h3 className="text-2xl font-semibold mb-4">General Inquiries</h3>
                            <p className="text-muted-foreground mb-6">For general questions or support, please contact our main office.</p>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-center gap-2">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <a href="mailto:info@boardly.com" className="hover:text-primary transition-colors">
                                        info@boardly.com
                                    </a>
                                </li>
                                <li className="flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <a href="tel:+18005551234" className="hover:text-primary transition-colors">
                                        +1 (800) 555-1234
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact; 