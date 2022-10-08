import React, { useState } from "react";
import AgentsContext from "./AgentsContext";

function AgentsProvider ({ children }) {
  const [allAgents, setAllAgents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [enableAgents, setEnableAgents] = useState(false);


const contextValue = {
  allAgents,
  setAllAgents,
  loading,
  setLoading,
  enableAgents,
  setEnableAgents,

};

return (
<AgentsContext.Provider value={contextValue}>
    {children}
</AgentsContext.Provider>
);
}

export default AgentsProvider;