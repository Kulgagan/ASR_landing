import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { truck2 } from "@/assets";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionBackground from "./section-background";

const stats = [
  {
    value: "85%",
    label: "Better Hauling Decisions",
    description: "More accurate hauling decisions through premium service"
  },
  {
    value: "60%",
    label: "Time Saved",
    description: "Reduced hauling time with premium service"
  },
  {
    value: "10k+",
    label: "Hauls Conducted",
    description: "Successfully completed hauls"
  },
  {
    value: "99%",
    label: "Customer Satisfaction",
    description: "Positive feedback from customer experience"
  }
];

const Overview = () => {
  return (
    <section id="overview" className="py-16 md:py-24 relative overflow-hidden">
      <SectionBackground 
        imageUrl={truck2}
        alt="Overview background"
        opacity={0.25}
        overlay="bg-white/20"
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
            Why Choose ASR?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Transform your hauling process with our premium service. Get the best materials, delivered on time, every time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group rounded-2xl p-8 bg-gradient-to-br from-background/50 to-background/80 border border-slate-800/50 backdrop-blur-3xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
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

export default Overview;