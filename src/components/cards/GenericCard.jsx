import React from "react";
import { Link, useLocation } from "react-router-dom";


function GenericCard ({ content }) {
  const location = useLocation();
  const clas = `card card-agent card-${location.pathname}`;

  const verifyMapOrBuddie = () => {
    if(content.mapUrl) {
      return content.splash;
    }

    return content.displayIcon;
  }

  return (
    <Link to={`${location.pathname}/${content.uuid}`} className={clas}>
      <img src={ verifyMapOrBuddie() } alt="Card-Display" className="card-img-top" />
      <section className="card-body">
        <h5 className="card-title">{ content.displayName }</h5>
      </section>
    </Link>
  )
}

export default GenericCard;