import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css";


function TodoSearch() {
  const { setSearchValue } = useContext(TodoContext)
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <input
        className={"TodoSearch"}
        type="text"
        placeholder="Cebolla"
        onChange={onSearchValueChange}
      />
    </>
  );
}

export default TodoSearch;
