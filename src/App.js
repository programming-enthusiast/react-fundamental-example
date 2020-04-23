import React from "react";
// import ShoppingList from "./components/ShoppingList";
// import Square from "./components/Square";
import Board from "./components/Board";
import "./styles.css";

export default function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
