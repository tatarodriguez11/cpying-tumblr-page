import React from 'react'
import './termsConditions.css'

export default function TermsConditionsContainer(props) {
  return (
    <div className="terms-conditions">
      {props.children}
    </div>
  )
}