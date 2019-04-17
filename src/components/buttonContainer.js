import React from 'react'
import './buttonContainer.css'

function buttonContainer(props) {
  return (
    <div className="button-container">
      {props.children}
    </div>
  )
}

export default buttonContainer