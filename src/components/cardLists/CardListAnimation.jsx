import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import CardAnimation from "../cards/CardAnimation";

function CardListAnimation () {
  const { oneSkin } = useContext(ContentContext);

  return (
    <section className="card-list-abilities">    
      {oneSkin.levels.map((level) => <CardAnimation key={ level.uuid } level={ level }/> )}
    </section>
  )
}

export default CardListAnimation;