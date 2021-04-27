import React from "react";
import "./Image.css";

const Image = ({ src }) => {
  return (
    <div>
      <img className="image" src={`/images/${src}`} alt="altImage" />
    </div>
  );
};

export default Image;
