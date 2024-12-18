import React from "react";

function App() {
  return (
    <div className="app-container">
      <nav className="header">
        {/* Logo Aligné à Gauche */}
        <div className="logo-container">
          <img src="../../public/assets/logo.png" className="logo-image" />
        </div>

        {/* Texte Centré */}
        <div className="header-text">Nos Abonnements</div>

        {/* Bouton Aligné à Droite */}
        <button className="header-button">Inscription - Connexion</button>
      </nav>
    </div>
  );
}

export default App;
