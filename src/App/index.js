import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];


// const localStorageItem = localStorage.getItem(itemName);
// let parsedItem;
// // si no hay  nada en local storage

// if (!localStorageItem) {
//   localStorage.setItem(itemName, JSON.stringify(initialValue));
//   parsedItem = initialValue;
//     //vamos a insertar o crear uno por defecto el todo v1
// // el cual sera un array vacio
// //el parse todo  estado por defecto es un array vacio
// } else {
//   parsedItem = JSON.parse(localStorageItem);
// }


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
export default App;