import React from "react";
import { useParams } from "react-router-dom";

function OneAgente () {
  const { displayName } = useParams();
  return(
    <section>{displayName}</section>
  )
}

export default OneAgente;