import React from "react";
import "./chat.css";
export default function chat() {
  return (
    <div>
      <div className="chat">
        <h1>
          Rencontrez des passionnés de running et créez des amitiés pour
          partager chaque foulée
        </h1>
        <div className="chat__container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="text1">
        <div className="circle"></div>
        <p> Vous avee repondu a</p>
        <div className="circle"></div>
        <p> Je t'ai pas dit mais oui c'est good pour jeudix</p>
      </div>
    </div>
  );
}
