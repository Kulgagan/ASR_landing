import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { truck1 } from "@/assets";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionBackground from "./section-background";

const values = [
  {
    title: "Our Mission",
    description: "To transform the hauling industry by delivering the best service, and materials, on time, every time.",
    icon: <Target className="h-8 w-8" />,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Our Team",
    description: "A hungry team of professionals working together to transform the hauling landscape.",
    icon: <Users className="h-8 w-8" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Our Impact",
    description: "We help companies make better hauling decisions and provided a better experience for customers worldwide.",
    icon: <Award className="h-8 w-8" />,
    color: "from-pink-500/20 to-orange-500/20"
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <SectionBackground 
        imageUrl={truck1}
        alt="About background"
        opacity={0.25}
        overlay="bg-white/1"
      />
      
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-semibold mb-6 md:text-5xl lg:text-6xl"
          >
            About ASR
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We're on a mission to transform hauling through premium service.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
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
          variants={fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative group rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300 max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80 rounded-2xl" />
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-4">Join Our Journey</h3>
              <p className="text-muted-foreground mb-6">Be part of the future of hauling. Experience how premium service can transform your hauling process.</p>
              <Link to="/contact">
                <Button size="lg" className="group">
                  Contact Us
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