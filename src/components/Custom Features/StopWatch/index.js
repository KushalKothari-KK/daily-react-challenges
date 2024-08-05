import { useEffect, useRef, useState } from "react"
import "./style.css"

const initialTime = {
    hours:"",
    minutes:"",
    seconds:""
}

const StopWatch = () => {
    const [time,setTime] = useState(initialTime)
    const [isRunning,setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const handleTimeChange = (e,field)=>{
        const value = parseInt(e.target.value,10) || 0;
        
        const copyTime = {...time};
        copyTime[field] = value
        copyTime.minutes += Math.floor(copyTime.seconds / 60);
        copyTime.seconds = copyTime.seconds % 60;
        copyTime.hours += Math.floor(copyTime.minutes / 60);
        copyTime.minutes = copyTime.minutes % 60;
        setTime(copyTime)
    }

    const handleStart = ()=>{
        if(time.hours.length === 0 && time.minutes.length === 0 && time.seconds.length === 0){
            return
        }
        setIsRunning(!isRunning)
    }

    const handleResetValue = ()=>{
        setTime(initialTime)
        clearInterval(intervalRef.current)
        setIsRunning(false)
    }
    useEffect(()=>{
        if(isRunning){
            intervalRef.current = setInterval(()=>{
                setTime((prevTime)=>{
                    let {hours,minutes,seconds} ={...prevTime};
                    seconds --;
                    if(seconds < 0){
                        minutes--;
                        seconds = 59;
                        if(minutes < 0){
                            hours--;
                            minutes = 59;
                            if(hours < 0){
                                clearInterval(intervalRef.current);
                                return initialTime;
                            }
                        }
                    }
                    return {hours,minutes,seconds}
                })
            },1000)
        }
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[isRunning])
  return (
    <>
    <div>
        <input disabled={isRunning} type="text" placeholder="HH" value={time.hours} onChange={(e)=> handleTimeChange(e,'hours')} />:
        <input disabled={isRunning} type="text" placeholder="MM" value={time.minutes} onChange={(e)=> handleTimeChange(e,'minutes')} />:
        <input disabled={isRunning} type="text" placeholder="SS" value={time.seconds} onChange={(e)=> handleTimeChange(e,'seconds')}  />
    </div>
    <div>
        <button onClick={handleStart}>{isRunning? 'Pause' : 'Start'}</button>
        <button onClick={handleResetValue}>Reset</button>
    </div>
    </>
  )
}

export default StopWatch