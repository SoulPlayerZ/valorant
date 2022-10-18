import React from "react";

function AgentContentPage ({oneAgent}) {
  return(
    <section>
      <h1>{ oneAgent.displayName }</h1>
      <img src={ oneAgent.displayIcon }  alt="Agent-Full-Portrait" />
    </section>
  )
}

export default AgentContentPage;