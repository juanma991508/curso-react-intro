import React from "react";
function useLocalStorage(nameItem, initialValue) 
{
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(()=> {
   setTimeout(() => {
    try 
   {
    const localStorageItem = localStorage.getItem(nameItem) === null || localStorage.getItem(nameItem) === undefined ?  localStorage.setItem(nameItem, JSON.stringify(initialValue)) : localStorage.getItem(nameItem);
    let parsedItem = JSON.parse(localStorageItem);
    setItem(parsedItem);
    setLoading(false);
  }
  catch(error) 
  {
    setLoading(false);
    setError(true);
  }
   }, 2000);
  }, []);


  const saveItem = (newItem) => 
  {
    localStorage.setItem(nameItem, JSON.stringify(newItem));
    setItem(newItem);
  }

  return { 
    item, 
    saveItem, 
    loading, 
    error, 
  };
}

export { useLocalStorage };