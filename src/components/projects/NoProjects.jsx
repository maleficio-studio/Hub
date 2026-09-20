// src/components/projects/NoProjects.jsx
// Placeholder animé quand il n'y a aucun projet
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logo.png";

const MESSAGES = [
  "Des projets arrivent bientôt…",
  "Quelque chose de grand se prépare.",
  "Restez connecté ✦",
  "En cours de création…",
];

export default function NoProjects() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="no-projects"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Aucun projet pour le moment"
    >
      {/* Orbite animée */}
      <div className="no-projects-orbit" aria-hidden="true">
        <div className="orbit-ring orbit-ring-1" />
        <div className="orbit-ring orbit-ring-2" />
        <div className="orbit-ring orbit-ring-3" />
        <div className="orbit-core">
          <img src={logo} alt="Maleficio Studio" className="orbit-favicon" />
        </div>
        <div className="orbit-dot orbit-dot-1" />
        <div className="orbit-dot orbit-dot-2" />
        <div className="orbit-dot orbit-dot-3" />
      </div>

      {/* Texte rotatif */}
      <div className="no-projects-text">
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIndex}
            className="no-projects-msg"
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {MESSAGES[msgIndex]}
          </motion.p>
        </AnimatePresence>
        <p className="no-projects-sub">
          Les projets seront ajoutés dans{" "}
          <span className="accent">quelques jours</span>
        </p>
      </div>

      {/* Barre de progression infinie */}
      <div className="no-projects-bar" aria-hidden="true">
        <div className="no-projects-bar-fill" />
      </div>
    </motion.div>
  );
}
