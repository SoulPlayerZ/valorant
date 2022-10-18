import React from "react";

function CardBuddie ({ buddie }) {

  return (
    <section className="card generic-card">
      <img src={ buddie.displayIcon } alt="buddie-icon"  loading="lazy" className="card-img-top" />
      <section className="card-body">
        <h4 className="card-title">{ buddie.displayName }</h4>
      </section>
    </section>
  )
}

export default CardBuddie;