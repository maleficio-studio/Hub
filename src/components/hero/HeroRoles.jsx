// src/components/hero/HeroRoles.jsx
// Rangée de pills affichant les rôles / compétences
import { motion } from "motion/react";

const fadeLine = {
  hidden: { opacity: 0, y: 12 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function HeroRoles({ roles = [], bio = "" }) {
  return (
    <>
      <motion.div
        className="hero-role-row"
        variants={fadeLine}
        initial="hidden"
        animate="show"
        custom={0.8}
      >
        {roles.map((role) => (
          <span key={role} className="hero-role-pill">
            {role}
          </span>
        ))}
      </motion.div>

      <motion.p
        className="hero-bio"
        variants={fadeLine}
        initial="hidden"
        animate="show"
        custom={1.0}
      >
        {bio}
      </motion.p>
    </>
  );
}
