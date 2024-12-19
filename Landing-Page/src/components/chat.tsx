import "./css/chat.css";

const RunningGroup = () => {
  const profiles = [
    { name: "LÉANA", image: "https://i.pravatar.cc/100?img=10" },
    { name: "FABIEN", image: "https://i.pravatar.cc/100?img=11" },
    { name: "ARMAND", image: "https://i.pravatar.cc/100?img=12" },
    { name: "LILIAN", image: "https://i.pravatar.cc/100?img=13" },
    { name: "QUENTIN", image: "https://i.pravatar.cc/100?img=14" },
  ];

  const messages = [
    {
      name: "Armand CLOTAIRE",
      text: "Il y a quelqu’un pour venir courir près du lac ?",
      image: "https://i.pravatar.cc/50?img=12",
    },
    {
      name: "Quentin LYRE",
      text: "Carrément ! J’arrive dans 5 minutes !",
      image: "https://i.pravatar.cc/50?img=14",
    },
    {
      name: "Lilian Orlandi",
      text: "Je peux me joindre à vous ?",
      image: "https://i.pravatar.cc/50?img=13",
    },
  ];

  return (
    <div className="running-group-container">
      <h2 className="title-red">
        RENCONTREZ DES PASSIONNÉS DE RUNNING ET CRÉEZ DES AMITIÉS POUR PARTAGER
        CHAQUE FOULÉE ...
      </h2>
      <div className="profile-section">
        {profiles.map((profile, index) => (
          <div key={index} className="profile">
            <img src={profile.image} alt={profile.name} className="avatar" />
            <p className="profile-name">{profile.name}</p>
          </div>
        ))}
      </div>

      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <img
              src={message.image}
              alt={message.name}
              className="chat-avatar"
            />
            <div className="chat-content">
              <p className="chat-name">{message.name}</p>
              <p className="chat-text">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="footer-red">
        ... CRÉEZ AUSSI DES GROUPES DE DISCUSSION POUR DISCUTER ET PLANIFIER LES
        PROCHAINES COURSES !
      </h3>
    </div>
  );
};

export default RunningGroup;
