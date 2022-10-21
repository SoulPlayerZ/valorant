import React, { useContext } from "react";
import ContentContext from "../context/ContentContext";

function MapContentPage () {
  const { oneMap } = useContext(ContentContext);

  return(
    <section className="one-agent-info-container">
      <section className="one-agent-top-container">
        <section className="full-portrait-container">
          <h1>{ oneMap.displayName }</h1>
          <img src={ oneMap.splash }  alt="Map-Full-Portrait" className="full-portrait"/>
        </section>
      </section>
      <hr />
      <h1>Display</h1>
      <img src={ oneMap.displayIcon } alt="Map-Full-Portrait" className="full-portrait display-map"/>
    </section>
  )
}

export default MapContentPage;