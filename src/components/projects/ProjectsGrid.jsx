// src/components/projects/ProjectsGrid.jsx
// Grille bento des cartes projets — affiche un placeholder si vide
import ProjectCard from "./ProjectCard";
import NoProjects from "./NoProjects";

export default function ProjectsGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return <NoProjects />;
  }

  return (
    <div className="projects-bento">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
