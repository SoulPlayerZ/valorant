import React, { useState } from "react";
import AgentsContext from "./AgentsContext";

function AgentsProvider ({ children }) {
  const [allAgents, setAllAgents] = useState([]);
  const [oneAgent, setOneAgent] = useState({});
  const [agentId, setAgentId] = useState("");

const contextValue = {
  allAgents,
  setAllAgents,
  oneAgent,
  setOneAgent,
  agentId,
  setAgentId,
};

return (
<AgentsContext.Provider value={contextValue}>
    {children}
</AgentsContext.Provider>
);
}

export default AgentsProvider;