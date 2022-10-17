import React from "react";

function Loading () {
  return(
    <section className="loading-container">
      <div className="lds-dual-ring"></div>
      <div className="loading-text">LOADING...</div>
    </section>
  )
}

export default Loading;