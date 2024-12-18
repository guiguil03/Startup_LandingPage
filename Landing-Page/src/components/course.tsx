import React from "react";
import "./css/other.css";
import phoneImage from "."; // Assure-toi que l'image est dans le bon chemin

const NotificationSection = () => {
  return (
    <section className="notification-section">
      <div className="image-content">
        <img src="../../public/assets/Phone.png" />
      </div>
      <div className="text-content">
        <h2>Personnalisez votre visibilité pour des rencontres sur mesure</h2>
        <p>
          Lorsque vous lancez une course, vous pouvez définir précisément qui
          peut accéder à votre profil. Que ce soit pour vous rendre visible
          uniquement aux coureurs de votre niveau, à ceux partageant vos centres
          d’intérêt ou encore aux utilisateurs situés à proximité, les
          paramètres s’adaptent à vos envies. Cette fonctionnalité vous garantit
          une expérience personnalisée, tout en vous permettant de rester maître
          de vos interactions et de favoriser des connexions pertinentes et
          enrichissantes
        </p>
      </div>
    </section>
  );
};

export default NotificationSection;
