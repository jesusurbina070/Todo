import React from "react";
import "./CreateButton.css";

function CreateButton({ setOpenModal }) {
  const onClickButton = () => setOpenModal(prevState => !prevState)
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export default CreateButton;
