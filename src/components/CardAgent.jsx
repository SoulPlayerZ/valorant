import React from "react";
import { Link } from "react-router-dom";

function CardAgent ({ agent }) {

  return (
    <Link to={`/agents/${agent.uuid}`} className="card card-agent">
      <img src={ agent.displayIcon } alt="agent-icon" className="card-img-top" />
      <section className="card-body">
        <h5 className="card-title">{ agent.displayName }</h5>
        <h7 className="card-text">{ `Codename: ${ agent.developerName }` }</h7>
      </section>
    </Link>
  )
}

export default CardAgent;