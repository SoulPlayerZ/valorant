import React, { useContext } from "react";
import ContentContext from "../context/ContentContext";

function BuddieContentPage () {
  const { oneBuddie } = useContext(ContentContext);

  return(
    <section className="one-agent-info-container">
      <section className="one-agent-top-container">
        <section className="full-portrait-container">
          <h1>{ oneBuddie.displayName }</h1>
          <img src={ oneBuddie.displayIcon }  alt="Buddie-Full-Portrait" className="full-portrait"/>
        </section>
      </section>
    </section>
  )
}

export default BuddieContentPage;