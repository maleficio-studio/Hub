// src/components/socials/SocialRow.jsx
// Ligne individuelle d'un lien social avec animation slide-in et hover fill
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function SocialRow({ social, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      id={`social-${social.id}`}
      href={social.url}
      target={social.id !== "email" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="social-row"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
      aria-label={`${social.name} — ${social.handle}`}
      onClick={() => {
        window.gtag?.("event", "Réseaux", {
          reseau: social.name,
        });
      }}
    >
      {/* Fond hover — z-index 0, derrière tout le texte */}
      <span className="social-row-bg" aria-hidden="true" />

      <div className="social-row-left">
        <span className="social-num">0{index + 1}</span>
        <span className="social-row-name">{social.name}</span>
      </div>

      <span className="social-row-handle">{social.handle}</span>

      <span className="social-row-icon" aria-hidden="true">
        ↗
      </span>
    </motion.a>
  );
}
