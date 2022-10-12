import React from "react";
import { Link } from "react-router-dom";

function CardMap ({ content }) {

  return (
    <Link to={`/maps/${content.uuid}`} className="card card-agent card-map">
      <img src={ content.splash } alt="Card-Display" className="card-img-top" />
      <section className="card-body">
        <h5 className="card-title">{ content.displayName }</h5>
      </section>
    </Link>
  )
}

export default CardMap;