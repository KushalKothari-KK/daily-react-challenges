import React from 'react'
import { useState } from 'react'

export default function MulitValuesOneState() {
    const [state,setState] = useState({
        count:0,
        text:'Hello',
        isActive:false
    })
    const incrementCount = () =>{
        setState({...state,count:state.count+1})
    }
    const changeText = () =>{
        setState({...state,text:'Updated Text'})
    }
    const toggleActive = () =>{
        setState({...state,isActive:!state.isActive})
    }
  return (
    <div>
        <h1>Multiple State Example</h1>
        <p>Count:{state.count}</p>
        <p>Text:{state.text}</p>
        <p>Active:{state.isActive ? 'Yes':'No'}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={changeText}>Change Text</button>
        <button onClick={toggleActive}>Toggle Active</button>
    </div>
  )
}
