import React from "react";
import { Link } from "react-router-dom";

function CardSkin ({ skin }) {

  const verifyIconForCard = () => {
    if (skin.displayIcon && !skin.displayName.includes("Standard")) {
      return skin.levels[0].displayIcon;
    }
    return skin.chromas[0].fullRender;
  }

  return (
    <Link to={`/weapons/skins/${skin.uuid}`} className="card card-agent card-weapon">
      <img src={ verifyIconForCard() } alt="Card-Display" className="card-img-top" />
      <section className="card-body">
        <h5 className="card-title">{ skin.displayName }</h5>
      </section>
    </Link>
  )
}

export default CardSkin;