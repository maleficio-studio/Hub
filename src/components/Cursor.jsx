// src/components/Cursor.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 35, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    const move = (e) => {
      rawX.set(e.clientX - 5);
      rawY.set(e.clientY - 5);
    };

    const onEnter = (e) => {
      if (e.target.closest("a, button, [role='button'], .social-row, .project-card")) {
        setHovering(true);
      }
    };

    const onLeave = (e) => {
      if (e.target.closest("a, button, [role='button'], .social-row, .project-card")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", onEnter, true);
    document.addEventListener("mouseleave", onLeave, true);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", onEnter, true);
      document.removeEventListener("mouseleave", onLeave, true);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      className={`cursor${hovering ? " hovering" : ""}`}
      style={{ x, y }}
      aria-hidden="true"
    />
  );
}
