import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section Logo */}
        <div className="footer-logo">
          <div className="logo-placeholder"></div>
          <p>© 2024 XXXX</p>
          <p>Tous droits réservés</p>
          <a href="/" className="privacy-link">
            Politique de confidentialité
          </a>
        </div>

        {/* Section Menu */}
        <div className="footer-section">
          <h4>MENU</h4>
          <ul>
            <li>XXXXXXXX</li>
            <li>Abonnements</li>
            <li>Nous contacter</li>
          </ul>
        </div>

        {/* Section Suivez-nous */}
        <div className="footer-section">
          <h4>SUIVEZ-NOUS</h4>
          <ul>
            <li>XXXXXXXX</li>
            <li>XXXXXXXX</li>
            <li>XXXXXXXX</li>
            <li>XXXXXXXX</li>
          </ul>
        </div>

        {/* Section Vous commencez */}
        <div className="footer-section">
          <h4>VOUS COMMENCEZ ?</h4>
          <ul>
            <li>S'inscrire</li>
            <li>Se connecter</li>
          </ul>
          <div className="app-buttons">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="store-badge"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="store-badge"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
