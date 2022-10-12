import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import GenericCard from "../cards/GenericCard";

function CardListGeneric () {
  const { allContent } = useContext(ContentContext );
  return (
    <section className="card-list-agents">    
      {allContent.map((content) => (<GenericCard key={ content.uuid } content={ content }/> ))}
    </section>
  )
}

export default CardListGeneric;