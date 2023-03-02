import { useState } from "react";
import AppUI from "./AppUI";
import useLocalStorage from "./hooks/useLocalStorage";
import { TodoProvider } from "./context/TodoContext";

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
