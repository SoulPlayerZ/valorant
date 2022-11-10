import React, { useContext } from "react";
import Loading from "../components/Loading";
import ContentContext from "../context/ContentContext";

function SkinContentPage () {
  const { oneSkin } = useContext(ContentContext);

  const verifyIconForCard = () => {
    if (oneSkin.displayIcon && !oneSkin.displayName.includes("Standard")) {
      return oneSkin.levels[0].displayIcon;
    }
    return oneSkin.chromas[0].fullRender;
  }

  const verifyOneSkinKeys = () => {
    return oneSkin.chromas === undefined || oneSkin.levels === undefined 
  }

  
  return(
    <>
    {verifyOneSkinKeys() ? <Loading /> : <section className="one-agent-info-container">
      <section className="one-agent-top-container">
        <section className="full-portrait-container">
          <h1>{ oneSkin.displayName }</h1>
          <a href={ verifyIconForCard() } target="_blank" rel="noreferrer">
            <img src={ verifyIconForCard() }  alt="skin-Full" className="full-portrait"/>
          </a>  
        </section>
      </section>
     </section>}

     <h1>Animation</h1>
    </>


    
  )
}

export default SkinContentPage;