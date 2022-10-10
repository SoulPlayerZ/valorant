import React, { useState } from "react";
import AgentsContext from "./AgentsContext";

function AgentsProvider ({ children }) {
  const [allAgents, setAllAgents] = useState([]);

const contextValue = {
  allAgents,
  setAllAgents,
};

return (
<AgentsContext.Provider value={contextValue}>
    {children}
</AgentsContext.Provider>
);
}

export default AgentsProvider;