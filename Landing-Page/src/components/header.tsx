import React from "react";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        {/* Logo Aligné à Gauche */}
        <div className="logo-container">
          <img
            src="../assets/téléchargement.jpg"
            alt="Logo"
            className="logo-image"
          />
        </div>

        {/* Texte Centré */}
        <div className="header-text">Nos Abonnements</div>

        {/* Bouton Aligné à Droite */}
        <button className="header-button">Inscription - Connexion</button>
      </header>
    </div>
  );
}

export default App;
