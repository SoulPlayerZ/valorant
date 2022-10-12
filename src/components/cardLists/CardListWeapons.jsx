import React, { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import CardWeapon from "../cards/CardWeapon";

function CardListWeapons () {
  const { allWeapons } = useContext(ContentContext);
  return (
    <section className="card-list-agents  card-list-weapons">    
      {allWeapons.map((content) => (<CardWeapon key={ content.uuid } content={ content }/> ))}
    </section>
  )
}

export default CardListWeapons;