import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import GenericCard from "../cards/GenericCard";

function CardListSprays () {
  const { allSprays } = useContext(ContentContext);
  return (
    <section className="card-list-agents">    
      {allSprays.map((content) => (<GenericCard key={ content.uuid } content={ content }/> ))}
    </section>
  )
}

export default CardListSprays;