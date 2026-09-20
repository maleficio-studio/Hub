// src/components/Projects.jsx
// Section "Mes projets" — assemble l'en-tête et la grille
import { projects } from "../data/profile";
import SectionLabel from "./ui/SectionLabel"; // 1. En-tête numéroté
import ProjectsGrid from "./projects/ProjectsGrid"; // 2. Grille bento
// └── ProjectCard                                // 3. Carte individuelle (via ProjectsGrid)

export default function Projects() {
  return (
    <section className="section" aria-label="Mes projets">
      {/* 1. En-tête de section */}
      <SectionLabel num="03" title="Mes projets" />

      {/* 2. Grille → 3. Cartes */}
      <ProjectsGrid projects={projects} />
    </section>
  );
}
