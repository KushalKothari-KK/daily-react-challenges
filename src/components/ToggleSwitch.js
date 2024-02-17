// Implement a basic toggle switch component to show hide

import { useState } from "react";

const ToggleSwitch = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggleSwitch = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <h1>Toggle Switch to Show/Hide Text</h1>
      <input type="checkbox" value={isToggle} onChange={handleToggleSwitch} />
      {isToggle ? <h4>Hello How are</h4> : null}
    </div>
  );
};

export default ToggleSwitch;
