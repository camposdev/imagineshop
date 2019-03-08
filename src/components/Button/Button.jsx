import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.scss";

const Button = props => {
  return (
    <button className="button">
      {props.icon && <FontAwesomeIcon className="button-icon" icon={props.icon} />}
      {props.children}
    </button>
  )
}

export default Button;