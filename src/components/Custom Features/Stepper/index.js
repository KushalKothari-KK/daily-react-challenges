import { useState } from "react";
import "./style.css"
const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information Content</div>,
    },
    {
      label: "Account Info",
      content: <div>Account Info Content</div>,
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>,
    },
    {
      label: "Review",
      content: <div>Review Content</div>,
    },
  ];

const Stepper = () => {
    const [currentStep,setCurrentStep] = useState(0);
    const handleStepContinue = () =>{
        if(currentStep < steps.length-1) setCurrentStep(currentStep+1)
    }
    const handleStepBack = () =>{
        if(currentStep > 0) setCurrentStep(currentStep-1)
    }
    
  return (
    <div className='stepper'>
        <div>
        {steps.map(({label,content},index)=>{
            const numberActiveClass = index <= currentStep ? 'active' : '';
            const lineActiveClass = index < currentStep ? 'active' : '';
            return (
                <div className='stepper-container'>
                    <div className={`step-number ${numberActiveClass}`}>
                            {index+1}
                           {index <steps.length-1 ? <div className={`step-line ${lineActiveClass}`}></div> : null}
                    </div>
                    <div className='step-label'>{label}</div>
                </div>
            )
        })}
        </div>
        <div className="step-content">{steps[currentStep].content}</div>
        <div className="step-actions">
            <button onClick={handleStepBack}>Back</button>
            <button onClick={handleStepContinue}>Continue</button>
        </div>
    </div>
  )
}

export default Stepper