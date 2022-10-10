import React, { useState } from "react";
import ContentContext from "./ContentContext";

function ContentProvider ({ children }) {
  const [allContent, setAllContents] = useState([]);
  const [loading, setLoading] = useState(false);


const contextValue = {
  allContent,
  setAllContents,
  loading,
  setLoading,
};

return (
<ContentContext.Provider value={contextValue}>
    {children}
</ContentContext.Provider>
);
}

export default ContentProvider;