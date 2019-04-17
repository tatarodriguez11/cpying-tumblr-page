import React from 'react'
import './eachTerm.css'

export default function EachTerm(props) {
  return (
    <p className="each-term">{props.children}</p>

  )
}