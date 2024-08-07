import FileFolder from "./FileFolder"
import folderData from "./data.json"
import "./style.css"

const FileExplorer = () => {
  return (
    <div>
        <FileFolder folderData={folderData} />
    </div>
  )
}

export default FileExplorer