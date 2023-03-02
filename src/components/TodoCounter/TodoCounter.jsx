import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <h2 className="TodoCounter">
      {totalTodos !== 0
        ? `Has ${completedTodos} completado de ${totalTodos} TODOs`
        : " Crea tu primer todo"}
    </h2>
  );
}

export default TodoCounter;
