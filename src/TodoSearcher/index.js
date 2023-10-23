import "./TodoSearcher.css"
import React from 'react';
import { TodoContext } from "../TodoContext";

function TodoSearcher() 
{
 

  const { 
    searchValue,
    setSearchValue
   } = React.useContext( TodoContext );
  return (
   <input placeholder="Cortar" 
   value={searchValue}
   className="TodoSearch"
   onChange={
    (event) => {
      setSearchValue(event.target.value);
    }
   } 
   />
  );
}

export {  TodoSearcher};