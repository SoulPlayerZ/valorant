import React from "react";
import CardListAbilities from "../cardLists/CardListAbilities";
import Loading from "../Loading";

function AgentContentPage ({oneAgent}) {

  return(
    <section className="one-agent-info-container">
      <section className="one-agent-top-container">
        <section className="full-portrait-container">
          <h1>{ oneAgent.displayName }</h1>
          <img src={ oneAgent.fullPortrait }  alt="Agent-Full-Portrait" className="full-portrait"
            Style={ `background-image: url(${oneAgent.background})` }
          />
        </section>
      </section>

      <hr />
      <h1>Info</h1>
      {oneAgent.voiceLine === undefined  ? <Loading/> 
        :
      <section className="voice-container">
        <h5>Voice</h5>
        <audio src={ oneAgent.voiceLine.mediaList[0].wave} controls>
          <track kind="captions"/>
            O seu navegador não suporta o elemento <code>audio</code>.
        </audio>   
      </section>}


      
      <section className="description-card-container">
        <section className="agent-description-card">
          <img src={ oneAgent.displayIcon } alt="Agent-Icon" className="agent-icon" />
            <section className="description-text-container">
              <h5> Description </h5>
              <h6> { oneAgent.description }</h6>
            </section>
        </section>
        {oneAgent.role === undefined  ? <Loading/> 
        :
        <section className="agent-description-card">
          <img src={ oneAgent.role.displayIcon} alt="Agent-Icon" className="agent-icon" />
          <section className="description-text-container">
            <h5> { oneAgent.role.displayName }</h5>
            <h6> { oneAgent.role.description }</h6>
          </section>
        </section> } 
      </section>

      <hr />

      <h1>Abilities</h1>
      {oneAgent.abilities === undefined  ? <Loading/> : <CardListAbilities abilities={ oneAgent.abilities } agentIcon={ oneAgent.displayIcon }/> }
        

  
    </section>
  )
}

export default AgentContentPage;