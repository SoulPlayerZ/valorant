import React from "react";

function CardAnimation ({ level }) {

  return (
    <section className="animation-card">
      <h5> { level.displayName }</h5>
      <video controls>
        <source src={ level.streamedVideo } type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
    </section>
    
  )
}

export default CardAnimation;