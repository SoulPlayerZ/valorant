import React from "react";
import valorantLogo from '../images/valorantLogo.png';
import { FaTwitch, FaInstagram, FaGithub } from 'react-icons/fa';

function Header () {
  return (
    <header>
      <section className="logo-container">
        <img src={ valorantLogo } alt="valorant-logo" className="logo"/>
      </section>
      <nav>
        <a href="https://github.com/SoulPlayerZ" target="_blank" rel="noreferrer" >
          <FaGithub className="social" />
        </a>
        <a href="https://www.instagram.com/thyrsokof/?theme=dark" target="_blank" rel="noreferrer">
          <FaInstagram className="social"/>
        </a>
        <a href="https://www.twitch.tv/soulplayer_z" target="_blank" rel="noreferrer">
          <FaTwitch className="social"/>
        </a>
      </nav>
    </header>
  )
}

export default Header;
