// Counter app to increment/decrement using button

import { useState } from "react"

const Counter = () => {
    const [countValue, setCountValue] = useState(0)
    return (
        <div>
            <h1>Current Value is: {countValue}</h1>
            <button onClick={() => setCountValue((prevcount) => prevcount + 1)}>Increment +</button>
            <button onClick={() => setCountValue((prevcount) => prevcount > 0 ? prevcount - 1 : prevcount)}>Decrement -</button>
        </div>
    )
}

export default Counter