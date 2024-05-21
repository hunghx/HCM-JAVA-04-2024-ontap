import { createContext, useState } from 'react'
import './App.css'

import Form from './compnents/Form'
import Ref from './compnents/Ref'
import ListProduct from './compnents/ListProduct'
import { Col, Container, Row } from 'react-bootstrap'
import FormProduct from './compnents/FormProduct'

// export const ThemeContext =  createContext("theme")

function App() {
  // const [count, setCount] = useState(0)
  // const getSex =(data)=>{
  //   console.log("data",data);
  // }
  return (
    <>
      {/* <ThemeContext.Provider value={{count,setCount}}>
       <div>
        <Ref/>
        <Form/>
      </div>
    </ThemeContext.Provider>  */}
      <Container fluid>
        <Row>
          <Col xs lg={8}>
            <h1>List Product</h1>
            <ListProduct></ListProduct>
          </Col>
          <Col lg={4}>
              <FormProduct/>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default App
