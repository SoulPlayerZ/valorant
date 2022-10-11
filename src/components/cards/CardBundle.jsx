import React from "react";
import { Link } from 'react-router-dom';

function CardBundle ({ bundle }) {

  return (
    <Link to={`/bundles/${bundle.uuid}`} className="card card-agent">
      <img src={ bundle.displayIcon } alt="bundle-icon" className="card-img-top" />
      <section className="card-body">
        <h4 className="card-title">{ bundle.displayName }</h4>
      </section>
   </Link>
  )
}

export default CardBundle;