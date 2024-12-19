import "./css/final.css";
import { useState } from "react";

import SignupModal from "./signupModal";

export default function final() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hero-container">
      <div className="hero-background">
        <img
          src="/assets/FEMME_FORET_LOGO.png"
          alt="Fond forêt"
          className="hero-image"
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">COURREZ AVEC UNIFY</h1>
        <div className="superpose">
          <button className="hero-button" onClick={() => setIsModalOpen(true)}>
            Devenir Beta-Testeur
          </button>
          <SignupModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
