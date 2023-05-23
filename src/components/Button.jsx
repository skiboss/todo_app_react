import React from "react";
import PropTypes from 'prop-types';

const Button = ({text, color, Class}) => {
  const buttonStyle = {
    backgroundColor: color,
    color: "white"}
  return (
    <button style={buttonStyle} className={Class}>{text}</button>
    )
}



Button.defaultProps = {
  color: "green",
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button