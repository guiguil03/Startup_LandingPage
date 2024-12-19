import React from "react";
import "./css/page.css"; // Import du fichier CSS

export default function Page() {
  return (
    <div className="page-container">
      <div className="row-container">
        <div className="image-column">
          <div className="image-wrapper">
            {/* <img
              src="../../public/assets/telephone1.png"
              alt="Téléphone"
              className="phone-image"
            /> */}
          </div>
        </div>

        <div className="text-column">
          <h1 className="title">REJOINT MON ALLURE À TON ALLURE!</h1>
          <button className="action-button">Inscription - Connexion</button>
        </div>
      </div>
    </div>
  );
}
