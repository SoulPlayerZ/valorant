import React, { useContext } from "react";
import ContentContext from "../context/ContentContext";

function MapContentPage () {
  const { oneMap } = useContext(ContentContext);

  return(
    <section className="one-agent-info-container">
      <section className="one-agent-top-container">
        <section className="full-portrait-container">
          <h1>{ oneMap.displayName }</h1>
          <a href={ oneMap.splash } target="_blank" rel="noreferrer">
            <img src={ oneMap.splash } alt="map-Splash" className="full-portrait"/>
          </a>
        </section>
      </section>
      <hr />
      <h1>Display</h1>
      <section className="full-portrait-container">
      <a href={ oneMap.displayIcon } target="_blank" rel="noreferrer">
        <img src={ oneMap.displayIcon } alt="Map-Display-Icon" />
      </a>  
      </section>
    </section>
  )
}

export default MapContentPage;