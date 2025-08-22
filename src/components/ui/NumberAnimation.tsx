import { motion } from "framer-motion";

type NumberAnimationProps = {
    children: React.ReactNode;
    direction?: "left" | "right";
};

const NumberAnimation: React.FC<NumberAnimationProps> = ({ children, direction = "left" }) => {
    const xValue = direction === "left" ? -30 : 30;

    return (
        <motion.div
            initial={{ opacity: 0, x: xValue }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default NumberAnimation;
