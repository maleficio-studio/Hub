// src/components/hero/HeroDecorator.jsx
// Partie droite décorative : grand chiffre fantôme + indicateur de scroll
import { motion } from "motion/react";

export default function HeroDecorator({ index = "01" }) {
  return (
    <div className="hero-right" aria-hidden="true">
      <motion.div
        className="hero-index"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {index}
      </motion.div>

      <motion.span
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Scroll
      </motion.span>
    </div>
  );
}
