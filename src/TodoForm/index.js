import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const { 
        setOpenModal,
        addNewTodo
     } = React.useContext(TodoContext);

     const onSubmit = 
     (event)=> {
        event.preventDefault();
        addNewTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = ()=> {
       
       setOpenModal(false);
   }


   const [newTodoValue, setNewTodoValue] = React.useState('');
   const onChange= (event) => { 
    setNewTodoValue(event.target.value);}
    return (
        <form onSubmit = {onSubmit}>
            <label> Escribe tu nuevo TODO</label>
            <textarea
            placeholder="Estudia programacion"
            value = {newTodoValue}
            onChange = {onChange}
            />
            <div className="TodoForm-buttonContainer">
            <button 
            className="TodoForm-button TodoForm-button--cancel"
            onClick = {onCancel}
            >
                Cancelar
            </button>
            <button 
            className="TodoForm-button TodoForm-button--add"
            >
                Añadir
            </button>
            </div>

        </form>
    );
}

export { TodoForm };