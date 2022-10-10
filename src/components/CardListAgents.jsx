import React, { useContext } from "react";
import AgentsContext from "../context/AgentsContext";
import CardAgent from "./CardAgent";

function CardListAgents() {
  const { allAgents } = useContext(AgentsContext);
  return (
    <section className="card-list-agents">    
      {allAgents.map((agent) => (<CardAgent key={ agent.uuid } agent={ agent }/> ))}
    </section>
  )
}

export default CardListAgents;