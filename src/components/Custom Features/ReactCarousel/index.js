import { useState } from "react"
import "./carousel.css"
import data from "./constant/data.json"
import { useEffect } from "react";
import { useRef } from "react";

const DATA_LENGHT = data.length;

const ReactCarousel = () => {
  const [index,setIndex]= useState(0);
  const ref = useRef(null)
  const handleNext = ()=>{
    setIndex((prevIndex)=>{
      if(prevIndex === DATA_LENGHT-1){
        return 0
      } return prevIndex+1
    })
    
  }
  const handlePrevious = ()=>{
    if(index === 0){
      setIndex(DATA_LENGHT-1)
    } else{
      setIndex(index-1)
    }
  }
  useEffect(()=>{
    ref.current = setInterval(handleNext,1000)
    return ()=>{
      clearInterval(ref.current)
    }
  },[])
  return (
    <div onMouseEnter={()=>clearInterval(ref.current)} onMouseLeave={()=> {ref.current = setInterval(handleNext,1000)}} className='container'>
      <div onClick={handlePrevious} className="leftButton">{"<"}</div>
      <img  src={data[index].download_url} alt="Carousel" />
      <div onClick={handleNext} className="rightButton">{">"}</div>
    </div>
  )
}

export default ReactCarousel