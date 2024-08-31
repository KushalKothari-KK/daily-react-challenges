import { useEffect, useState } from "react";
import "./styles.css"
import Signal from "./Signal";

const lights = ['red','yellow','green'];

const TrafficLights = () => {
    const [active,setActive] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setActive((prevState)=>{
                return (prevState+1)%lights.length
            })
        },2000)
        return ()=>{
            clearInterval(intervalId)
        }
    })
  return (
    <div className="container">
        {
            lights.map((color,index)=>{
                return <Signal isActive={active === index} color={color} />
            })
        }
    </div>
  )
}

export default TrafficLights