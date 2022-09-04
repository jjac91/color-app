import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Colors from "./Colors";
import ColorForm from "./ColorForm";
import Color from "./Color";

function Routes() {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, setColors] = useState(initialColors);

  useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [
    colors,
  ]);

  const addColor = (colorData) => {
    setColors((colors) => ({ ...colors, ...colorData }));
  };

  function renderCurrentColor(props) {
    const { name } = props.match.params;
    const hexColor = colors[name];
    return <Color {...props} hexColor={hexColor} name={name} />;
  }

  return (
    <Switch>
      <Route exact path="/colors">
        <Colors colors={colors} />
      </Route>
      <Route exact path="/colors/new">
        <ColorForm addColor={addColor} />
      </Route>
      <Route exact path="/colors/:name" render={renderCurrentColor} />
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
