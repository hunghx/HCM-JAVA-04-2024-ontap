import { createContext, useState } from 'react'
import './App.css'
  
import Form from './compnents/Form'
import Ref from './compnents/Ref'

export const ThemeContext =  createContext("theme")

function App() {
  const [count, setCount] = useState(0)
  const getSex =(data)=>{
    console.log("data",data);
  }
  return (
    <>
    <ThemeContext.Provider value={{count,setCount}}>
       <div>
        <Ref/>
        {/* <Student getSex={getSex} age={10} name={'nguyen van a'} count={count}>jfgvvfhvf</Student> */}
        <Form/>
      </div>
    </ThemeContext.Provider>
     
    </>
  )
}

export default App
