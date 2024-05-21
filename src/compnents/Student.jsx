
import React, { useState } from 'react'
 // destructuring : phá vỡ cấu trúc
const Student = ({children, count, name , age, getSex}) => {
    // state  
    const [sex , setSex] = useState(false)
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{count}</li>
        <li>{age}</li>
        <li>{children}</li>
      </ul>
      <button onClick={()=>getSex(sex)}>Send</button>
    </div>
  )
}

export default Student
