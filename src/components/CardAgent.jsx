import React from "react";
import { Link } from "react-router-dom";

function CardAgent ({ agent }) {

  return (
    <Link to={`/agent/${agent.uuid}`} className="card-agent">
      <section className="card-section">
        <img src={ agent.displayIcon } alt="agent-icon" className="card-img-top" />
        <h3>{ agent.displayName }</h3>
        <h5>{ `Codename: ${ agent.developerName }` }</h5>
      </section>
    </Link>
  )
}

export default CardAgent;