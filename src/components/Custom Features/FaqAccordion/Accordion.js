import { useState } from "react"

const Accordion = ({faq}) => {
  const [show,setShow]= useState(false);
  return (
    <div className="accordion">
      <h3>{faq.question} <span onClick={()=>setShow(!show)}>{show? '-' : '+'}</span></h3>
      <p>{show ? faq.answer : ''}</p>
    </div>
  )
}

export default Accordion