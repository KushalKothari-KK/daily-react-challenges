import { useRef, useState } from "react"
import "./style.css"

const ToastNotification = () => {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  const handleClick = (message, type) => {
    const id = new Date().getTime();
    const toast = [...toasts, { id, message, type }]
    setToasts(toast)
    timersRef.current[id] = setTimeout(()=>{
      handleClose(id)
    },5000)
  }

  const handleClose = (id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    
    setToasts((prevToast)=>{
      const filteredArr = prevToast.filter((obj)=> obj.id !== id);
      return filteredArr
    })
    
  }
  return (
    <div className="container">
      <div className="toast-container">
        {toasts.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>X</span>
            </div>
          )
        })}
      </div>
      <div className="btn-container">
        <button className="toast-btn" onClick={() => handleClick("Success Toast", "success")}>Success Toast</button>
        <button className="toast-btn" onClick={() => handleClick("Warning Toast", "warning")}>Warning Toast</button>
        <button className="toast-btn" onClick={() => handleClick("Info Toast", "info")}>Info Toast</button>
        <button className="toast-btn" onClick={() => handleClick("Error Toast", "error")}>Error Toast</button>
      </div>
    </div>
  )
}

export default ToastNotification