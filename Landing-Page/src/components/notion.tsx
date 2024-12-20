import "./css/notion.css";

const Notion = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>
            C'est quoi <strong>UNIFY</strong>
          </h1>
          <p>
            Unify est une application de running social qui révolutionne la
            façon dont les coureurs se connectent. En plus de permettre
            l'enregistrement de vos courses, Unify vous aide à rencontrer
            d'autres passionnés de course à pied en fonction de votre niveau, de
            vos centres d'intérêt et bien plus encore. Avec un focus sur
            l'aspect social et la visibilité des autres utilisateurs, Unify
            transforme chaque course en une opportunité de partager, d'échanger
            et de tisser des liens.
          </p>
        </div>

        <div className="image-wrapper">
          <img
            src="/assets/fond.png"
            alt="Illustration Unify"
            className="img1"
          />
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-image-wrapper">
          <img src="/assets/coours.jpg" alt="Course" className="img2" />
          <div className="stats-card">
            <p className="time-distance">5 KM : 45m 26s</p>
          </div>
        </div>
        <p className="stats-text">
          SUIVEZ VOS PERFORMANCES, PROGRESSEZ DANS VOS ENTRAINEMENTS ET
          DECOUVREZ DE NOUVEAUX HORIZONS
        </p>
      </div>
    </div>
  );
};

export default Notion;
