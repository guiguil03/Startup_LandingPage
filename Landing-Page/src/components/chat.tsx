import React from "react";
import "./css/chat.css";

const RunningGroup = () => {
  const profiles = [
    { name: "FABIEN", image: "https://i.pravatar.cc/100?img=1" },
    { name: "LÉANA", image: "https://i.pravatar.cc/100?img=2" },
    { name: "ARMAND", image: "https://i.pravatar.cc/100?img=3" },
    { name: "LILIAN", image: "https://i.pravatar.cc/100?img=4" },
    { name: "ISAURE", image: "https://i.pravatar.cc/100?img=5" },
  ];

  const messages = [
    {
      name: "Armand CLOTAIRE",
      text: "Il y a quelqu’un pour venir courir près du lac ?",
      image: "https://i.pravatar.cc/50?img=3",
    },
    {
      name: "Isaure LYRE",
      text: "Carrément ! J’arrive dans 5 minutes !",
      image: "https://i.pravatar.cc/50?img=5",
    },
    {
      name: "Lilian Orlandi",
      text: "Je peux me joindre à vous ?",
      image: "https://i.pravatar.cc/50?img=4",
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
        <div className="profile add-profile">
          <div className="add-button">+</div>
          <p className="profile-name">AJOUTER</p>
        </div>
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
