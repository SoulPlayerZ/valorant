import React from "react";
import { Link } from "react-router-dom";

function CardWeapon ({ content }) {

  return (
    <Link to={`/weapons/${content.uuid}`} className="card card-agent card-weapon">
      <img src={ content.displayIcon } alt="Card-Display" className="card-img-top" />
      <section className="card-body">
        <h5 className="card-title">{ content.displayName }</h5>
      </section>
    </Link>
  )
}

export default CardWeapon;