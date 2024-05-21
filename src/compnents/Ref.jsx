import React, { useReducer, useRef } from 'react'

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
    const [count, dispatch] = useReducer(reducer, 0) //ES6 : destructoring
    // ref
    // trả về 1 object có 2 thuộc tính : current  và initValue
    const focusInputRef = () => {
        inputRef.current.focus(); // HTML Element 
        console.log(inputRef.current.value);
        // userreducer
    }
    console.log(count);
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInputRef}>Focus vào ô input</button>
            <p>{count}</p>
            <button onClick={() => dispatch("increment")}>Increment + 1</button>
            <button onClick={() => dispatch("decrement")}>Decrement - 1</button>
            <button onClick={() => dispatch("incrementX2")}>Increment x 2</button>
        </div>
    )
}
