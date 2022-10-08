import React, { useState } from "react";
import AgentsContext from "./AgentsContext";

function AgentsProvider ({ children }) {
  const [allAgents, setAllAgents] = useState([]);
  const [loading, setLoading] = useState(false);


const contextValue = {
  allAgents,
  setAllAgents,
  loading,
  setLoading,
};

return (
<AgentsContext.Provider value={contextValue}>
    {children}
</AgentsContext.Provider>
);
}

export default AgentsProvider;