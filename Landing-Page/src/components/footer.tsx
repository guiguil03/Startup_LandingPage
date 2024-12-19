import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-placeholder">
            <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
          </div>
          <p>© 2024 XXXX</p>
          <p>Tous droits réservés</p>
        </div>

        <div className="footer-section">
          <h4>MENU</h4>
          <ul>
            <li>UNIFY</li>
            <li>Abonnements</li>
            <li>Nous contacter</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>SUIVEZ-NOUS</h4>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Tik Tok</li>
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
