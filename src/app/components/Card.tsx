import React from 'react'

interface Tobj{
  Name:string,
  RollNo:number,
  Day:string
}
const Card = (props:Tobj) => {
  return (
    <div className='bg-slate-400 p-10 w-96 m-10 rounded-2xl font-extrabold outline
   hover:scale-105 transform transition-transform  duration-500
    '>
    <div>
      <h1>Name: {props.Name}</h1>
      
      </div>
      <div>
      <h1>RollNo. {props.RollNo}</h1>
      </div>
      <div>
      <h1>Day : {props.Day}</h1>
      </div>
      </div>

  )
}

export default Card