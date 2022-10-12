import React, { useState } from "react";
import ContentContext from "./ContentContext";

function ContentProvider ({ children }) {
  const [allBuddies, setAllBuddies] = useState([]);
  const [allMaps, setAllMaps] = useState([]);
  const [allSprays, setAllSprays] = useState([]);
  const [allWeapons, setAllWeapons] = useState([]);
  const [loading, setLoading] = useState(false);


const contextValue = {
  allBuddies,
  setAllBuddies,
  allMaps,
  setAllMaps,
  allSprays,
  setAllSprays,
  allWeapons,
  setAllWeapons,
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