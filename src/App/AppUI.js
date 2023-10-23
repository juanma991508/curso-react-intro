import { TodoCounter } from "../TodoCounter";
import { TodoSearcher } from "../TodoSearcher";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import {  TodoContext } from "../TodoContext"; 
import  React  from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
    return (
        <div className="App">
      <TodoCounter />
      <TodoSearcher />
      
              <TodoList> 
              {loading && <TodosLoading/>}
              {error && <TodosError/>}
              {(!loading && searchedTodos.length == 0 )&& <EmptyTodos/>}
              {searchedTodos.map(todo => {
                return <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
              })}
            </TodoList>
 
      <CreateTodoButton />

      {openModal &&
      (<Modal>
        <TodoForm />
      </Modal>)}
      </div>

    )
}

export { AppUI };