import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import GenericCard from "../cards/GenericCard";

function CardListBuddies () {
  const { allBuddies } = useContext(ContentContext);
  return (
    <section className="card-list-agents">    
      {allBuddies.map((content) => (<GenericCard key={ content.uuid } content={ content }/> ))}
    </section>
  )
}

export default CardListBuddies;