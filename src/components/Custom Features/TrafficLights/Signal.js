import React from 'react'

const Signal = ({color,isActive}) => {
  return (
    <div className="round-light" style={{backgroundColor: isActive ? color : 'gray'}}></div>
  )
}

export default Signal