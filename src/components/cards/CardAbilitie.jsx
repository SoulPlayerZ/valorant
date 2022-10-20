import React from "react";

function CardAbilitie ({ abilitie, agentIcon }) {

  const verifyIconForCard = (displayIcon) => {
    if (displayIcon) {
      return displayIcon;
    }

    return agentIcon;
  }

  return (
    <section className="abilitie-card ">
      <img src={ verifyIconForCard(abilitie.displayIcon) } alt="Abiltie-Icon" className="agent-icon"/>
      <section className="description-text-container">
        <h5> { abilitie.displayName }</h5>
        <h6> { abilitie.description }</h6>
      </section>
    </section>
  )
}

export default CardAbilitie;