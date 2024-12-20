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

        <div className="header-text"></div>

        <button className="hero-button" onClick={() => setIsModalOpen(true)}>
          Devenir Beta-Testeur
        </button>
      </nav>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
