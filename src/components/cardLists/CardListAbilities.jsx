import React, { useId } from "react";
import CardAbilitie from "../cards/CardAbilitie";

function CardListAbilities ({ abilities, agentIcon }) {
  const id = useId();

  return (
    <section className="card-list-abilities">   
      {abilities.map((abilitie) => (<CardAbilitie key={ id } abilitie={ abilitie } agentIcon={ agentIcon }/> ))}
    </section>
  )
 
}

export default CardListAbilities;