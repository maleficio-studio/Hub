// src/App.jsx
import "./index.css";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import ParticleField from "./components/ui/ParticleField";
import { motion } from "motion/react";

function App() {
  return (
    <>
      {/* Custom animated cursor */}
      <Cursor />

      {/* Particules de fond */}
      <ParticleField />

      <motion.div
        className="hub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Top bar — glisse depuis le haut */}
        <motion.header
          className="top-bar"
          role="banner"
          initial={{ y: -32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <motion.span
            className="top-logo"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Corentin Delvaque
          </motion.span>
          <motion.div
            className="top-status"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="status-dot" aria-hidden="true" />
            Disponible
          </motion.div>
        </motion.header>

        {/* Main content */}
        <main>
          <Hero />
          <Socials />
          <Projects />
        </main>

        {/* Footer — remonte depuis le bas */}
        <motion.footer
          className="hub-footer"
          role="contentinfo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="footer-copy">© 2026 — Tous droits réservés</span>
          <motion.span
            className="footer-accent"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Corentin Delvaque ✦
          </motion.span>
        </motion.footer>
      </motion.div>
    </>
  );
}

export default App;
