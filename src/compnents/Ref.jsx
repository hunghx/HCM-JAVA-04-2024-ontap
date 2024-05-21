import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react'
import Content from './Content';

const reducer = (state, action) => {
    switch (action) {
        case "increment":
            state = state + 1
            return state;
        case "decrement":
            state = state - 1
            return state;
        case "incrementX2":
            state = state * 2
            return state;
        default:
            return state;
    }
}

export default function Ref() {
    let inputRef = useRef(null);
    const [number,setNumber] = useState(0);
    const [arr, setArr] = useState([1,2,3,4]);
    // userreducer
    const [count, dispatch] = useReducer(reducer, 0) //ES6 : destructoring
    // ref
    // trả về 1 object có 2 thuộc tính : current  và initValue
    const focusInputRef = () => {
        inputRef.current.focus(); // HTML Element 
        console.log(inputRef.current.value);
        
    }
    console.log(count);

    // useCallback : tránh, hạn chế tạo lại hàm 

    const handleIncrement = useCallback(()=>{
        setNumber(pre => pre +1) // nên sử dụng 
        // setNumber(number+1) //   state vẫn là trạng thái cũ
    },[])
    const pushArrayRandom = ()=>{
        let random = Math.ceil(Math.random()*1000)
        setArr(pre => [...pre,random]) // nên sử dụng
    }
    // useMemo : hạn chế tính toán lại biểu thức 
    let sum  = useMemo(()=>{
        return arr.reduce((temp,num)=>{
            console.log(num);
            return temp+num
        },0)
    },[arr])
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInputRef}>Focus vào ô input</button>
            <p>{count}</p>
            <button onClick={() => dispatch("increment")}>Increment + 1</button>
            <button onClick={() => dispatch("decrement")}>Decrement - 1</button>
            <button onClick={() => dispatch("incrementX2")}>Increment x 2</button>

            <h1>{number}</h1>
            <Content handleIncrement = {handleIncrement}></Content>
            <p>sum :{sum}</p>
            <button onClick={pushArrayRandom}>Random</button>
        </div>
    )
}
