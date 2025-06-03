import React from "react";
import menu from "./menu";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Restaurant Menu</h1>
      <Menu dishes={menu} />
    </div>
  );
}

export default App;
