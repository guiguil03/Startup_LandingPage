import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section Logo et Copyright - Toujours en premier */}
        <div className="footer-section">
          <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
          <p>© 2024 UNIFY</p>
          <p>Tous droits réservés</p>
        </div>

        {/* Section Menu - Position centrale */}
        <div className="footer-section">
          <h4>MENU</h4>
          <ul>
            <li>UNIFY</li>
            <li>Abonnements</li>
            <li>Nous contacter</li>
          </ul>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="footer-section">
          <h4>SUIVEZ-NOUS</h4>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Tik Tok</li>
          </ul>
        </div>

        {/* Section Téléchargement - Toujours en dernier */}
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
