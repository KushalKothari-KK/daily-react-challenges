import React from "react";
import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt="uploaded" />}
    </div>
  );
};

export default ImageUpload;
