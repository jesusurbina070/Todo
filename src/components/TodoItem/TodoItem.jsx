import React from "react";
import "./TodoItem.css";

function TodoItem({ text, completed, onDelete, onComplete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delate" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export default TodoItem;
