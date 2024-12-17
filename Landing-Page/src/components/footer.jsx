import React from "react";
import "./footer.css"; // Assurez-vous d'importer votre fichier CSS

export default function Footer() {
  return (
    <div className="footer">
      {/* Liens du footer */}
      <div>
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/politique-confidentialite">Politique de confidentialité</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Section Copyright */}
      <div className="copyright">
        <p>&copy; 2024 Mon Application. Tous droits réservés.</p>
      </div>
    </div>
  );
}
