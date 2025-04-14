// Create a hook to easily use setTimeout(callback,delay)
// Reset the timer if delay changes
// Do not reset the timer if only callback changes and call callback

import React from 'react'
import { useTimeout } from './useTimeout'

const UseTimeoutHook = () => {
    useTimeout(()=>{
        console.log('abcd')
    },8000)
  return (
    <div>UseTimeoutHook</div>
  )
}

export default UseTimeoutHook