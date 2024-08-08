import { useEffect, useRef, useState } from 'react'
import "./style.css"
const InteractiveShape = () => {
  const [grid, setGrid] = useState(Array.from({ length: 3 }, () => new Array(3).fill(false)))
  const queueRef = useRef([])
  const timerId = useRef([]);
  const handleClick = (rowIdx, colIdx, flag) => {
    if(timerId.current.length > 0 && flag) {
      return
    }
    if (grid[rowIdx][colIdx] && flag) {
      return
    }
    setGrid((prevGrid) => {
      const gridDeepCopy = prevGrid.map((row) => [...row]);
      gridDeepCopy[rowIdx][colIdx] = flag;
      flag && queueRef.current.push([rowIdx, colIdx])
      return gridDeepCopy
    })

  }

  useEffect(() => {
    if (queueRef.current.length === 9) {
      queueRef.current.forEach(([rowIdx, colIdx], idx) => {
        timerId.current[idx] = setTimeout(() => {
          handleClick(rowIdx, colIdx, false);
          if(idx === timerId.current.length -1) timerId.current = []
        }, 1000 * (idx + 1))
      });
      queueRef.current = []
    }
  }, [grid]);

  useEffect(() => {
    timerId.current.forEach((idx) => clearTimeout(idx))
  }, [])

  return (
    <div className='container'>
      {grid.map((row, rowIdx) => {
        return row.map((col, colIdx) => {
          return <div className={`cell ${col ? 'active' : ''}`} key={`${rowIdx}-${colIdx}`} onClick={() => handleClick(rowIdx, colIdx, true)}></div>
        })
      })}
    </div>
  )
}

export default InteractiveShape