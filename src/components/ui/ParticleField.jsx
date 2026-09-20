// src/components/ui/ParticleField.jsx
// Fond de particules flottantes décoratives (canvas-free, pure CSS + motion)
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const PARTICLE_COUNT = 22;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  x: randomBetween(2, 98),
  y: randomBetween(5, 95),
  size: randomBetween(1.5, 4),
  duration: randomBetween(6, 18),
  delay: randomBetween(0, 8),
  dx: randomBetween(-18, 18),
  dy: randomBetween(-20, 20),
  opacity: randomBetween(0.08, 0.28),
}));

export default function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            x: [0, p.dx, -p.dx * 0.5, 0],
            y: [0, p.dy, -p.dy * 0.6, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity * 0.6, p.opacity],
            scale: [1, 1.6, 0.8, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
