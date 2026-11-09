'use client'
import React,{useState} from 'react'

export default function Counter() {
    
    let [a, setCount] = useState(0);   

    let increment = () => {
        setCount(a + 1);
        console.log("Incremented: " + a);
    };

    let decrement = () => {
        setCount(a - 1);
        console.log("Decremented: " + a);
    };

    return (
        <div>
            <h1>Counter</h1>
            <h3>Count: {a}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
