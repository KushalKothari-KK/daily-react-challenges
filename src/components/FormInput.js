// create a form that takes user input and display it in real-time

import { useState } from "react";

const FormInput = () => {
  const [formValue, setFormValue] = useState("");
  return (
    <div>
      <h1>You have entered: {formValue}</h1>
      <br />
      <input
        type="text"
        value={formValue}
        placeholder="Enter Text here"
        onChange={(e) => setFormValue(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
