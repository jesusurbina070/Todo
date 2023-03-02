import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoContext = React.createContext();

export function TodoProvider({ children }) {
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false)
    const { item, saveItem, loading, error } = useLocalStorage("Todos_V1", []);


    const completedTodos = item?.filter(({ completed }) => !!completed).length;
    const totalTodos = item?.length;

    const filterTodos = (item, searchTodo) => {
        if (searchTodo.length === 0) {
            return item;
        } else {
            return item.filter((todo) => {
                const todoText = todo.text.toLowerCase();
                const searchText = searchTodo.toLowerCase();
                return todoText.includes(searchText);
            });
        }
    };

    let searchTodos = filterTodos(item, searchValue);

    const saveTodo = (todo) => saveItem([...item, todo])
    

    const completedTodo = (text) => {
        const todoIndex = item?.findIndex((todo) => todo.text === text);
        const newTodos = [...item];
        newTodos[todoIndex].completed = true;
        saveItem(newTodos);
    };

    const deleteTodo = (text) => {
        const filterTodos = item?.filter((todo) => todo.text !== text);
        saveItem(filterTodos);
    };
    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            searchTodos,
            completedTodo,
            deleteTodo,
            setSearchValue,
            loading,
            error,
            openModal,
            setOpenModal,
            saveTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

