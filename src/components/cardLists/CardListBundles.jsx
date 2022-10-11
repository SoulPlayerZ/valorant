import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import CardBundle from "../cards/CardBundle";

function CardListBundles () {
  const { allContent } = useContext(ContentContext );
  return (
    <section className="card-list-agents">    
      {allContent.map((bundle) => (<CardBundle key={ bundle.uuid } bundle={ bundle }/> ))}
    </section>
  )
}

export default CardListBundles;