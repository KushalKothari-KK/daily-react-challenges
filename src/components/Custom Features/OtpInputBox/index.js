import { useEffect, useRef, useState } from 'react'
import "./otp.css";

const OtpInputBox = ({otpLenght=6}) => {
  const [otpFields,setOtpFields] = useState(new Array(otpLenght).fill(""));
  const ref = useRef([])
  const handleKeyDown = (e,index)=>{
    const key = e.key;
    const copyOtpFields = [...otpFields];
    if(key === "ArrowLeft"){
      if(index > 0) ref.current[index-1].focus();
    }
    if(key === "ArrowRight"){
      if(index+1 < otpFields.length) ref.current[index+1].focus();
    }
    if(key === "Backspace"){
      copyOtpFields[index] = "";
      if(index > 0) ref.current[index-1].focus();
      setOtpFields(copyOtpFields);
      return;
    }
    if(isNaN(key)){
      return
    }
    copyOtpFields[index] = key;
    if(index+1 < otpFields.length) ref.current[index+1].focus();
    setOtpFields(copyOtpFields);
  }

  useEffect(()=>{
    ref.current[0].focus();
  },[])
  return (
    <div className='container'>
      {
        otpFields.map((value,index)=>{
          return(
            <input 
            key={index}
            type="text"
            ref={(currentInput)=>(ref.current[index] = currentInput)}
            value={value}
            onKeyDown={(e)=>handleKeyDown(e,index)}
            aria-label={`otp-${index}`} />
          )
        })
      }
    </div>
  )
}

export default OtpInputBox