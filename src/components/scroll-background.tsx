import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

type ScrollBackgroundProps = {
    imageUrl: string;
};

const ScrollBackground: React.FC<ScrollBackgroundProps> = ({ imageUrl }) => {
    const { scrollYProgress } = useScroll();
    const blur = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.35]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const blurFilter = useTransform(blur, (b: number) => `blur(${b}px)`);

    return (
        <motion.div
            aria-hidden
            style={{ filter: blurFilter, opacity, scale }}
            className="pointer-events-none fixed inset-0 -z-10 bg-center bg-cover"
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-white/70" />
        </motion.div>
    );
};

export default ScrollBackground;

