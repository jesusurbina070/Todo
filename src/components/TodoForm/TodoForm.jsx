import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'
import "./TodoForm.css"

function TodoForm() {
    const [value, setValue] = useState("")
    const { saveTodo, setOpenModal } = useContext(TodoContext)
    const onChange = (e) => setValue(e.target.value)
    const onCancel = () => setOpenModal(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { text: value, completed: false }
        saveTodo(newTodo)
        setOpenModal(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Escribe tu nuevo todo</label>
            <textarea onChange={onChange} value={value} placeholder='Cortar la cebolla para el almuerzo'></textarea>
            <div className='TodoForm-buttonContainer'>
                <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancelar</button>
                <button type='submit' className='TodoForm-button TodoForm-button--cancel' >Añadir</button>
            </div>
        </form>
    )
}

export default TodoForm