import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import CardSkin from "../cards/CardSkin";

function CardListSkins () {
  const { allSkins } = useContext(ContentContext);
  return (
    <section className="card-list-agents">    
      {allSkins.map((skin) => (<CardSkin key={ skin.uuid } skin={ skin }/> ))}
    </section>
  )
}

export default CardListSkins;