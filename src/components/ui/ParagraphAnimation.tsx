import { motion } from "framer-motion";

type ParagraphAnimationProps = {
    lines: string[]; // har line ko array ke andar pass karo
    delay?: number;  // optional delay before animation starts
};

const lineVariant = {
    hidden: { y: "100%", rotate: 7, opacity: 0 },
    visible: { y: 0, rotate: 0, opacity: 1 },
};

const containerVariant = {
    hidden: {},
    visible: (customDelay: number) => ({
        transition: {
            delayChildren: customDelay, // animation start delay
            staggerChildren: 0.15,      // har line ke beech delay
        },
    }),
};

export default function ParagraphAnimation({ lines, delay = 0 }: ParagraphAnimationProps) {
    return (
        <motion.div
            className="overflow-hidden"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={delay}
        >
            {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                    <motion.p
                        className="md:text-base text-sm tracking-wider leading-6 md:leading-7"
                        variants={lineVariant}
                        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                    >
                        {line}
                    </motion.p>
                </div>
            ))}
        </motion.div>
    );
}
