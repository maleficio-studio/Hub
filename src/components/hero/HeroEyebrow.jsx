// src/components/hero/HeroEyebrow.jsx
// Ligne d'introduction au-dessus du nom
import { motion } from "motion/react";

const fadeLine = {
  hidden: { opacity: 0, y: 12 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function HeroEyebrow({ label = "Portfolio · Hub" }) {
  return (
    <motion.div
      className="hero-eyebrow"
      variants={fadeLine}
      initial="hidden"
      animate="show"
      custom={0.1}
    >
      <span className="eyebrow-line" aria-hidden="true" />
      {label}
    </motion.div>
  );
}
