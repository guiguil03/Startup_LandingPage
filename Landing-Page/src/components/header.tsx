import { useState } from "react";
import SignupModal from "./signupModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <nav className="header">
        <div className="logo-container">
          <img src="/assets/logo.png" className="logo-image" alt="Logo" />
        </div>

        <div className="header-text">Nos Abonnements</div>

        <button className="header-button" onClick={() => setIsModalOpen(true)}>
          Inscription - Connexion
        </button>
      </nav>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
