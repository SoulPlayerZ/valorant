import React from "react";
import { Link } from "react-router-dom";

function GenericCard ({ content }) {

  return (
    <Link to={`/buddies/${content.uuid}`} className="card card-agent">
      <img src={ content.displayIcon } alt="agent-icon" className="card-img-top" />
      <section className="card-body">
        <h5 className="card-title">{ content.displayName }</h5>
      </section>
    </Link>
  )
}

export default GenericCard;