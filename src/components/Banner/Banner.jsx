import React from "react";
import "./style.scss";

const Banner = props => {
  return (
    <div className="container">
      <div className="banner" style={props.style}>
        <img src={props.img} alt={props.alt}/>
      </div>
    </div>
  )
}

export default Banner;