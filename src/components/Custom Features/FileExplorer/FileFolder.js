import { useState } from "react"

const FileFolder = ({folderData}) => {
    const [showChildren,setShowChildren] = useState(false);
    const handleClick = () =>{
        setShowChildren(!showChildren)
    }
  return (
    <div className="container">
        <h5>
            {folderData.type === "folder" ?(showChildren ? "📂" : "📁" ): "📄" }
            <span onClick={handleClick}>{folderData.name}</span>
        </h5>
        {
          showChildren && folderData?.children?.map((data,index)=> <FileFolder key={index} folderData={data}/>)
        }
    </div>
  )
}

export default FileFolder