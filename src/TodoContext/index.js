import React from 'react';
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


/*
const defaultTodos = [
  {text: 'Demo_1', completed: true},
  {text: 'Demo_2', completed: false},
  {text: 'Demo_3', completed: true},
  {text: 'Demo_4', completed: false},
  {text: 'Demo_5', completed: true},
]*/
//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStrogare.removeItem('TODOS_V1');

function TodoProvider ({ children }) 
{



    const nameTodosLocalStorage = "TODOS_V1";
    const {
      item: todos, 
      saveItem: saveTodos,
      loading,
      error
    } = useLocalStorage(nameTodosLocalStorage, []);
  
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(
      todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;
  
  
    const searchedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      }
    );
  
  
  
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
    
    const addNewTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text, 
        completed: false});
      saveTodos(newTodos);
    }
  
  
    return (
        <TodoContext.Provider value = {{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addNewTodo
        }}>
            {children}
        </TodoContext.Provider>  
    )
}




export { TodoContext, TodoProvider };