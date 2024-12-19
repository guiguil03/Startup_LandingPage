import "./css/maps.css";
const MapSection = () => {
  return (
    <div className="map-section-container">
      {/* Section texte */}
      <div className="text-section">
        <h2 className="title">TROUVEZ LE MONDE TOUT AUTOUR DE VOUS</h2>
        <p className="description">
          Parcourez une carte intuitive qui affiche en temps réel les profils
          disponibles et trouvez des personnes avec qui échanger, collaborer ou
          simplement partager un moment convivial. Ajustez les critères pour
          cibler des intérêts communs ou explorer librement les alentours. La
          confidentialité reste une priorité, avec des options claires pour
          gérer la visibilité, afin d’offrir une expérience enrichissante et
          sécurisée à tous.
        </p>
      </div>
      <div className="map-section">
        <img src="/assets/photo.png" className=".img-map" />
      </div>

      {/* Section carte */}
    </div>
  );
};

export default MapSection;
