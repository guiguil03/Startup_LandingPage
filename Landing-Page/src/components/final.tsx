import "./css/final.css";
export default function final() {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <img
          src="../../public/assets/foret.jpg"
          alt="Fond forêt"
          className="hero-image"
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">COURREZ AVEC UNIFY</h1>
        <img
          src="../../public/assets/logo.png"
          alt="Fond forêt"
          className="logo-image"
        />
        <button className="hero-button">Devenir Bêta-Testeur</button>
      </div>
    </div>
  );
}
