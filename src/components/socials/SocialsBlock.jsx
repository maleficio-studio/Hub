// src/components/socials/SocialsBlock.jsx
// Bloc d'une catégorie de liens (ex: Réseaux sociaux, Sites & Contact)
import SectionLabel from "../ui/SectionLabel";
import SocialRow from "./SocialRow";

export default function SocialsBlock({ title, num, items }) {
  return (
    <div>
      <SectionLabel num={num} title={title} />

      <nav className="socials-list" aria-label={title}>
        {items.map((social, i) => (
          <SocialRow key={social.id} social={social} index={i} />
        ))}
      </nav>
    </div>
  );
}
