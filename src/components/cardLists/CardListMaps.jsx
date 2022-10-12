import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import CardMap from "../cards/CardMap";

function CardListMaps () {
  const { allMaps } = useContext(ContentContext);
  return (
    <section className="card-list-agents card-list-maps">    
      {allMaps.map((content) => (<CardMap key={ content.uuid } content={ content }/> ))}
    </section>
  )
}

export default CardListMaps;