import Accordion from "./Accordion"
import data from "./data.json"
import "./accordion.css"

const FaqAccordion = () => {
  return (
    <div>
      <h1>FAQ's</h1>
      {data.faqs.map((obj,index)=> <Accordion key={index} faq={obj}/>)}
        
    </div>
  )
}

export default FaqAccordion