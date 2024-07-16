import React, { useState } from 'react'

const StarIcon = ({ starCount }) => {
    const [starValue,setStarValue] = useState();
    const [hoverValue,setHoverValue] = useState(0);
    return (
        <div>{new Array(starCount).fill(0).map((val, index) =>
            <span key={index} className={(hoverValue === 0 && index < starValue) || index < hoverValue ? 'gold' : ''} 
            onClick={()=> setStarValue(index+1)}
            onMouseEnter={()=>setHoverValue(index+1)}
            onMouseLeave={()=>setHoverValue(0)}
            >&#9733;</span>)}
        </div>
    )
}

export default StarIcon