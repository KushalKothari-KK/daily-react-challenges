import { useRef, useState } from "react";
import "./style.css"
const initialData = {
    Todo: [
      "Design UI mockups",
      "Set up project repository",
      "Write unit test",
      "Integrate payment gateway",
    ],
    "In Progress": ["Develop authentication flow", "Implement responsive design"],
    Completed: [
      "Set up CI/CD pipeline",
      "Conduct code reviews",
      "Deploy initial version to staging",
    ],
  };

const DragDrop = () => {
    const [data,setData] = useState(initialData)
    const sourceItem = useRef()
    const dragContainer = useRef()
    const handleStartDrag = (e,container,item) =>{
        e.target.style.opacity = "0.5";
        dragContainer.current = container;
        sourceItem.current = item
    }
    const handleDragEnd = (e) =>{
        e.target.style.opacity = "1";
    }

    const handleDrop = (e,targetContainer) =>{
        const item = sourceItem.current
        const sourceContainer = dragContainer.current
        setData((prev)=>{
            const newData = {...prev}
            newData[sourceContainer] = newData[sourceContainer].filter((i)=> i !== item)
            newData[targetContainer] = [...newData[targetContainer],item]
            return newData
        })

    }

    const handleDragOver =(e) =>{
        e.preventDefault() //as html prevents default drag
    }
  return (
    <div className="container">
        {
            Object.keys(data).map((container,index)=>(
                <div key={index} 
                className="container-block"
                onDrop={(e)=>handleDrop(e,container)}
                onDragOver={handleDragOver}
                >
                    <h2>{container}</h2>
                    <div>
                        {data[container].map((items,index)=>(
                            <div key={index} 
                            className="items" 
                            draggable
                            onDragStart={(e)=>handleStartDrag(e,container,items)}
                            onDragEnd={handleDragEnd}
                            >
                                {items}
                            </div>
                        ))}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DragDrop