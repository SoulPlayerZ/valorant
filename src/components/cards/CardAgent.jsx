import React from "react";
import { Link } from "react-router-dom";

function CardAgent ({ agent }) {

  return (
    <Link to={`/agents/${agent.displayName}`} className="card card-agent">
    <img src={ agent.displayIcon } alt="agent-icon" className="card-img-top" />
    <section className="card-body">
      <h4 className="card-title">{ agent.displayName }</h4>
      <h6 className="card-text">{ `Codename: ${ agent.developerName }` }</h6>
    </section>
  </Link>
  )
}

export default CardAgent;