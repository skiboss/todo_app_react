import React from 'react'
import PropTypes from "prop-types"

function Heading({text}) {
  return (
    <div style={headingStyle}>{text}</div>
  )
}

const headingStyle = {
    fontWeight: "bold",
    fontSize: "2rem",
    paddingTop: "1rem",
    paddingBottom: "2rem"
}

Heading.defaultProps = {
    text: "#todo"
}

export default Heading