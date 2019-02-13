import React from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import Counter from "./components/Counter";
import Divider from "@material-ui/core/Divider";

const App = () => {
  return (
    <div className="App">
      <ToDo />
      <Divider />
      <Counter />
      <Divider />
    </div>
  );
};

export default App;
