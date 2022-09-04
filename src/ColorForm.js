import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ColorForm = ({ addColor }) => {
  const history = useHistory();
  const firstState = { name: "", hexColor: "" };
  const [formData, setFormData] = useState(firstState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addColor({ [formData.name]: formData.hexColor });
    history.push("/colors");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="hexColor">Color value</label>
      <input
        type="color"
        name="hexColor"
        id="hexColor"
        onChange={handleChange}
        value={formData.hexColor}
      />
      <button id="newColorButton">Add Color</button>
    </form>
  );
};

export default ColorForm;
