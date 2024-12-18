import React from "react";
import "./css/chat.css";

export default function Chat() {
  return (
    <div className="chat-container">
      <h1>
        Rencontrez des passionnés de running et créez des amitiés pour partager
        chaque foulée
      </h1>
      <div className="chat">
        <div className="chat__container">
          <div className="circle-container">
            <div className="circle">
              <p>A</p>
            </div>
            <div className="message received">Salut, comment ça va ?</div>
          </div>

          <div className="circle-container">
            <div className="circle">
              <p>B</p>
            </div>
            <div className="message sent">Salut, ça va bien et toi ?</div>
          </div>

          <div className="circle-container">
            <div className="circle">
              <p>A</p>
            </div>
            <div className="message received">
              Ça va, je suis prêt pour la course de demain !
            </div>
          </div>

          <div className="circle-container">
            <div className="circle">
              <p>B</p>
            </div>
            <div className="message sent">
              Super, j'ai hâte ! On se retrouve à 9h ?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
