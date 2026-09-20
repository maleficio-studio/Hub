// src/components/Hero.jsx
// Section "Présentation" — compose les quatre sous-parties du hero
import { profile } from "../data/profile";
import HeroEyebrow from "./hero/HeroEyebrow";    // 1. Ligne d'intro
import HeroName from "./hero/HeroName";          // 2. Nom en grand
import HeroRoles from "./hero/HeroRoles";        // 3. Rôles + bio
import HeroDecorator from "./hero/HeroDecorator"; // 4. Déco droite (chiffre + scroll)

const ROLES = ["Création Digitale", "Motion Design", "Graphisme", "Web Design", "MMI ✦"];

export default function Hero() {
  return (
    <section className="hero" aria-label="Présentation">
      {/* Colonne gauche : contenu textuel */}
      <div className="hero-left">
        <HeroEyebrow label="Portfolio · Hub" /> {/* 1. Ligne d'intro */}
        <HeroName name={profile.name} />        {/* 2. Nom révélé */}
        <HeroRoles roles={ROLES} bio={profile.bio} /> {/* 3. Rôles + bio */}
      </div>

      {/* Colonne droite : décoration visuelle */}
      <HeroDecorator index="01" />              {/* 4. Chiffre + scroll */}
    </section>
  );
}
