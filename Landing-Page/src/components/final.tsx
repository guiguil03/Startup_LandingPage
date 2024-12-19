import "./css/final.css";
export default function final() {
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
          <button className="hero-button">Devenir Bêta-Testeur</button>
        </div>
      </div>
    </div>
  );
}
