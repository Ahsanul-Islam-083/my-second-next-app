"use client";

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log('Counter value in counter component', count);
    return (
        <div>
            <h2 className='text-5xl'>Counter: {count}</h2>
            <button onClick={()=>setCount(count+1)}
             className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer'>Increment</button>
        </div>
    );
};

export default Counter;