// src/components/ui/AnimatedWord.jsx
// Révèle un mot avec un effet de rideau vertical (curtain reveal)
import { motion } from "motion/react";

export default function AnimatedWord({ text, delay = 0 }) {
  return (
    <div className="word">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        style={{ display: "block" }}
      >
        {text}
      </motion.span>
    </div>
  );
}
