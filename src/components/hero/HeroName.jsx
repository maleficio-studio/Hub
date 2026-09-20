// src/components/hero/HeroName.jsx
// Nom en grande typographie — révélation lettre par lettre avec effet blur
import { motion } from "motion/react";

const letterVariants = {
  hidden: { y: "110%", opacity: 0 },
  show: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.25 + i * 0.045,
    },
  }),
};

export default function HeroName({ name }) {
  const words = name.split(" ");
  let letterIndex = 0;

  return (
    <h1 className="hero-name" aria-label={name}>
      {words.map((word) => {
        const wordLetters = word.split("");
        const startIndex = letterIndex;
        letterIndex += wordLetters.length;

        return (
          <div key={word} className="word">
            <span style={{ display: "flex" }}>
              {wordLetters.map((letter, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={letterVariants}
                  initial="hidden"
                  animate="show"
                  custom={startIndex + i}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </div>
        );
      })}
    </h1>
  );
}
