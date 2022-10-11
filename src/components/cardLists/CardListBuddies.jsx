import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import CardBuddie from "../cards/CardBuddie";

function CardListBuddies() {
  const { allContent } = useContext(ContentContext );
  return (
    <section className="card-list-agents">    
      {allContent.map((buddie) => (<CardBuddie key={ buddie.uuid } buddie={ buddie }/> ))}
    </section>
  )
}

export default CardListBuddies;