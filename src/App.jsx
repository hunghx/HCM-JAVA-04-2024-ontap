import { useState } from 'react'
import './App.css'
import Student from './compnents/Student'
import Form from './compnents/Form'

function App() {
  const [count, setCount] = useState(0)
  const getSex =(data)=>{
    console.log("data",data);
  }
  return (
    <>
      <div>
        {/* <Student getSex={getSex} age={10} name={'nguyen van a'} count={count}>jfgvvfhvf</Student> */}
      <Form/>
      </div>
    </>
  )
}

export default App
