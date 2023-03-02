import React, { useContext } from "react";
import {
  TodoCounter,
  TodoSearch,
  CreateButton,
  TodoItem,
  TodoList,
  Modal,
  TodoForm,
} from "./components";
import { TodoContext } from "./context/TodoContext";


function AppUI() {
  const { openModal, setOpenModal } = useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ searchTodos, loading, completedTodo, deleteTodo }) => (

          <TodoList>
            {loading && <p>Cargando...</p>}
            {searchTodos?.map(({ text, completed }) => (
              <TodoItem
                key={text}
                text={text}
                completed={completed}
                onComplete={() => completedTodo(text)}
                onDelete={() => deleteTodo(text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateButton setOpenModal={setOpenModal} />

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export default AppUI;
