import React, { useContext } from "react";
import AgentsContext from "../context/AgetntsContext";
import CardAgent from "./CardAgent";
import NotFound from "./NotFound";

function CardListAgents() {
  const { allAgents } = useContext(AgentsContext );
  return (
    <section className="card-list-agents">    
      {allAgents.length === 0 ? <NotFound />
       : allAgents.map((agent) => (<CardAgent key={ agent.uuid } agent={ agent }/> ))}
    </section>
  )
}

export default CardListAgents;