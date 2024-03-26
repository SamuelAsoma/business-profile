import React from "react";
import profileImage from "../assets/samuel.JPG";


export default function Header() {
  return (
    <header className="header-container">
      <img src={profileImage} alt="samuel" className="profile-image" />
      <div className="header-info container">
        <h1 className="header-name">Samuel Asoma</h1>
        <h4 className="header-role">Frontend Developer</h4>
        <p className="header-website">samuelasoma.com</p>
      </div>
    </header>
  );
}
