import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface SectionBackgroundProps {
  imageUrl: string;
  alt: string;
  opacity?: number;
  overlay?: string;
}

const SectionBackground = ({ 
  imageUrl, 
  alt, 
  opacity = 0.25, 
  overlay = "bg-white/20" 
}: SectionBackgroundProps) => {
  return (
    <motion.div 
      className="absolute inset-0 -z-10"
      variants={fadeIn}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      style={{ opacity }}
    >
      <img 
        src={imageUrl}
        alt={alt}
        className="h-full w-full object-cover"
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </motion.div>
  );
};

export default SectionBackground;
