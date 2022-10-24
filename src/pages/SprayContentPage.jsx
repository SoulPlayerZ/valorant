import React, { useContext } from "react";
import ContentContext from "../context/ContentContext";

function MapContentPage () {
  const { oneSpray } = useContext(ContentContext);

  const verifyImgDisplay = () => {
    if(oneSpray.animationPng) {
      return oneSpray.animationPng;
    }
    if (oneSpray.fullTransparentIcon) {
      return oneSpray.fullTransparentIcon;
    }
    return oneSpray.displayIcon;
  }

  return(
    <section className="one-agent-info-container">
      <section className="one-agent-top-container">
        <section className="full-portrait-container">
          <h1>{ oneSpray.displayName }</h1>
          <a href={ verifyImgDisplay()  } target="_blank" rel="noreferrer">
            <img src={ verifyImgDisplay() }  alt="spray-Full" className="full-portrait"/>
          </a>  
        </section>
      </section>
     </section>
  )
}

export default MapContentPage;