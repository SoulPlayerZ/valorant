import React from "react";

function GenericCard ({ content }) {

  return (
    <section className="card generic-card">
      <img src={ content.displayIcon } alt="agent-icon" className="card-img-top" />
      <section className="card-body">
        <h5 className="card-title">{ content.displayName }</h5>
      </section>
    </section>
  )
}

export default GenericCard;