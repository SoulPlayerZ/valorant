import React, { useState } from "react";
import ContentContext from "./ContentContext";

function ContentProvider ({ children }) {
  const [allBuddies, setAllBuddies] = useState([]);
  const [oneBuddie, setOneBuddie] = useState({});
  const [allMaps, setAllMaps] = useState([]);
  const [oneMap, setOneMap] = useState({});
  const [allSprays, setAllSprays] = useState([]);
  const [oneSpray, setOneSpray] = useState({});
  const [allWeapons, setAllWeapons] = useState([]);
  const [loading, setLoading] = useState(false);


const contextValue = {
  allBuddies,
  setAllBuddies,
  oneBuddie,
  setOneBuddie,
  allMaps,
  setAllMaps,
  oneMap,
  setOneMap,
  allSprays,
  setAllSprays,
  oneSpray,
  setOneSpray,
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