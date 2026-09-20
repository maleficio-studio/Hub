// src/components/projects/ProjectCard.jsx
// Carte projet individuelle avec animation d'entrée et effet spotlight
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ProjectThumb from "./ProjectThumb";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.a
      ref={ref}
      id={project.id}
      href={project.url}
      target={project.url !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12,
      }}
      onMouseMove={handleMouseMove}
      aria-label={`Projet : ${project.title}`}
    >
      {/* Halo rapide — crossfade smooth au hover */}
      <div className="project-card-halo-fast" aria-hidden="true" />

      <ProjectThumb
        icon={project.icon}
        thumbFrom={project.thumbFrom}
        thumbTo={project.thumbTo}
        mousePos={mousePos}
      />

      <div className="project-card-body">
        <div className="project-card-meta">
          <h3 className="project-card-title">{project.title}</h3>
          <span className="project-card-arrow" aria-hidden="true">↗</span>
        </div>

        <p className="project-card-desc">{project.description}</p>

        <div className="project-tags" aria-label="Tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
