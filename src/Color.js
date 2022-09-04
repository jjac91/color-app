import React from "react";
import "./Color.css";

const Color = ({ hexColor, name, history }) => {
  if (!hexColor) {
    history.push("/colors");
  }
  return (
    <div className="Color" style={{ backgroundColor: hexColor }}>
      This is {name}
    </div>
  );
};

export default Color;
