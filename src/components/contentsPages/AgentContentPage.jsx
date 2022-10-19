import React from "react";

function AgentContentPage ({oneAgent}) {
  return(
    <section className="one-agent-container">
      <div className="full-portrait-container">
        <img src={ oneAgent.fullPortrait }  alt="Agent-Full-Portrait" className="full-portrait"
          Style={ `background-image: url(${oneAgent.background})` }
        />


      
        <h1>{ oneAgent.displayName }</h1>
      </div>
    </section>
  )
}

export default AgentContentPage;