import "./css/other.css";

const NotificationSection = () => {
  return (
    <section className="notification-section">
      <div className="text-content">
        <h2>METTEZ AU COURANT LES COUREURS DES ALENTOURS</h2>
        <p>
          Courez à plusieurs en profitant d'un système de notifications qui vous
          alerte dès qu’un utilisateur à proximité décide d'aller courir. Vous
          êtes également libres de signaler vos propres départs pour inviter
          d'autres personnes à se joindre à vous. Ces alertes en temps réel
          facilitent les rencontres spontanées et transforment vos séances de
          course en moments partagés. Que ce soit pour vous motiver, vous
          dépasser ou simplement profiter de la dynamique de groupe, cette
          fonctionnalité favorise des expériences sportives engageantes et
          conviviales.
        </p>
      </div>
      <div className="image-content">
        <img src="/assets/Phone.png" />
      </div>
    </section>
  );
};

export default NotificationSection;
