import React from 'react'

export default function Notice (props) {
  return (
    <div className="box">
      <h2>{props.data.title}</h2>
      <h4>{props.data.description}</h4>
    </div>
  )
}
