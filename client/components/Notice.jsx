import React from 'react'
const boxStyle = {
  outlineStyle: 'solid',
  maxWidth: "700px"
}
export default function Notice (props) {
  return (
    <div className="box" style={boxStyle}>
      <h2>{props.data.title}</h2>
      <h4>{props.data.description}</h4>
    </div>

  )
}
