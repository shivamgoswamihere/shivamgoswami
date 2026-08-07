import React from 'react'
import './components-css/LineSlideButton.css'

/* Renders a <span>, not a <button>: every usage wraps this in an interactive
   parent (react-scroll Link / react-router NavLink), and nesting a button
   inside a link is invalid HTML and creates duplicate keyboard tab stops. */
const LineSlideButton = ({text}) => {
  return (
    <span className="btn-98">{text}</span>
  )
}

export default LineSlideButton
