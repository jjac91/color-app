import React from "react";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  console.log(colors)
  console.log(Object.keys(colors))
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));
  return (
    <div>
      <div>
        <h1>Color Factory</h1>
        <Link to="/colors/new">Add a color!</Link>
      </div>
      <div>{colorLinks}</div>
    </div>
  );
};

export default Colors;
