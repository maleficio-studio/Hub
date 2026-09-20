// src/components/projects/ProjectThumb.jsx
// Miniature de la carte projet avec effet de lumière qui suit la souris
export default function ProjectThumb({ icon, thumbFrom, thumbTo, mousePos }) {
  return (
    <div
      className="project-card-thumb"
      style={{
        "--thumb-from": thumbFrom,
        "--thumb-to": thumbTo,
      }}
      aria-hidden="true"
    >
      <span style={{ position: "relative", zIndex: 1 }}>{icon}</span>

      {/* Lumière qui suit le curseur */}
      <div
        className="card-shine"
        style={{
          "--mx": `${mousePos.x}%`,
          "--my": `${mousePos.y}%`,
        }}
      />
    </div>
  );
}
