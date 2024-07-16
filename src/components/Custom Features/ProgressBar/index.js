import { useState } from "react";
import './progress.css'
import ProgressBarComp from "./ProgressBarComp";

const ProgressBar = () => {
  const [showProgress, setShowProgress] = useState(false);
  return (
      <div className='wrapper'>
        {showProgress ? (<ProgressBarComp />) : null}
        <button onClick={() => setShowProgress(!showProgress)}>{showProgress ? 'OFF':'ON'}</button>
      </div>
  )
}

export default ProgressBar