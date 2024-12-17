import React from "react";
import "./notion.css"; // Import du fichier CSS

const notion = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h1> C'est quoi XXXXX</h1>
        <p>
          XXXXX est une application de running social qui révolutionne la façon
          dont les coureurs se connectent. En plus de permettre l’enregistrement
          de vos courses, XXXXX vous aide à rencontrer d’autres passionnés de
          course à pied en fonction de votre niveau, de vos centres d’intérêt et
          bien plus encore. Avec un focus sur l’aspect social et la visibilité
          des autres utilisateurs, XXXXX transforme chaque course en une
          opportunité de partager, d’échanger et de tisser des liens
        </p>
      </div>
      <div className="sections-container">
        <div className="image-section">
          <img
            src="../../public/assets/sport.jpg"
            className="img1"
            alt="placeholder"
          />
        </div>
        <div className="info-section">
          <img src="../../public/assets/coours.jpg" className="img2"></img>
          <div className="dis">
            <p className="time-distance">5 KM 45m 26s</p>
          </div>
          <p className="text">
            SUIVEZ VOS PERFORMANCES, PROGRESSEZ DANS VOS ENTRAINEMENTS ET
            DECOUVREZ DE NOUVEAUX HORIZONS
          </p>
        </div>
      </div>
    </div>
  );
};

export default notion;
