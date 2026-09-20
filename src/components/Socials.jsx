// src/components/Socials.jsx
// Section "Liens" — filtre les données et compose deux blocs de liens
import { socials } from "../data/profile";
import SocialsBlock from "./socials/SocialsBlock"; // 1. Bloc de catégorie (label + liste)
// └── SocialRow                                  // 2. Ligne individuelle (via SocialsBlock)

export default function Socials() {
  // Séparation des données par catégorie
  const socialItems = socials.filter((s) => s.category === "social");
  const siteItems = socials.filter(
    (s) => s.category === "site" || s.category === "contact"
  );

  return (
    <section className="section" aria-label="Liens">
      {/* 1. Bloc Réseaux → 2. Lignes */}
      <SocialsBlock title="Réseaux sociaux" num="01" items={socialItems} />

      {/* Séparateur — identique à la bordure entre sections */}
      <div style={{ borderTop: "1px solid var(--border)", margin: "48px 0" }} aria-hidden="true" />

      {/* 1. Bloc Sites & Contact → 2. Lignes */}
      <SocialsBlock title="Sites & Contact" num="02" items={siteItems} />
    </section>
  );
}
