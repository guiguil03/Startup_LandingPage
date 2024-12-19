import "./css/page.css"; // Import du fichier CSS

export default function Page() {
  return (
    <div className="page-container">
      <div className="row-container">
        {/* Colonne de gauche : image */}
        <div className="image-column">
          <div className="image-wrapper">
            {/* Image 1 : Téléphone */}
            <img
              src="../../public/assets/telephone1.png"
              alt="Téléphone"
              className="phone-image"
            />

            {/* Image 2 : Carte */}
            {/* <img
              src="../../public/assets/carte.jpg"
              alt="Carte"
              className="map-image"
            /> */}
          </div>
        </div>

        {/* Colonne de droite : texte et bouton */}
        <div className="text-column">
          <h1 className="title">REJOINT MON ALLURE À TON ALLURE !</h1>
          <button className="action-button">Inscription - Connexion</button>
        </div>
      </div>
    </div>
  );
}
