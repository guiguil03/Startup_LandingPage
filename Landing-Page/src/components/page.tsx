import "./css/page.css"; // Import du fichier CSS
import { useState } from "react";

import SignupModal from "./signupModal";
export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page-container">
      <div className="row-container">
        <div className="text-column">
          <h1 className="title1">
            Votre motivation, vos partenaires, vos parcours : tous réunis !
          </h1>
          <button className="hero-button " onClick={() => setIsModalOpen(true)}>
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
