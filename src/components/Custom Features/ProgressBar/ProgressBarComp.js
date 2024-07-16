import { useState, useEffect } from 'react'

const ProgressBarComp = () => {
    const [bar, setBar] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setBar((prevVal) => {
                if (prevVal === 100) {
                    clearInterval(interval)
                }
                return Math.min(prevVal + 5, 100)
            })
        }, 150);
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className="progress-container">
            <div style={{ transform: `translateX(${bar - 100}%)` }} className="progress">
            </div>
        </div>
    )
}

export default ProgressBarComp