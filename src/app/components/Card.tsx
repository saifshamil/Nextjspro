import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h1>Name:{props.Name}</h1>
      <h1>RollNo.{props.RollNo}</h1>
      <h1>Day : {props.Day}</h1>
    </div>
  )
}

export default Card