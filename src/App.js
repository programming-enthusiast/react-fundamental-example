import React from "react";
import ShoppingList from "./components/ShoppingList";
import Square from "./components/Square";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ShoppingList name="Sample App" />
      <Square />
    </div>
  );
}
