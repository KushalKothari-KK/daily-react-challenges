import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h1>Color Picker</h1>
      <input type="color" onChange={handleColorChange} />
      <div style={{ width: "100vw", height: "100vh", background: color }}></div>
    </div>
  );
};

export default ColorPicker;
