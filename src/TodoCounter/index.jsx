import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
import { FcOpenedFolder } from "react-icons/fc";


function TodoCounter({ total, completed }) {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODO  <span> <FcOpenedFolder /> </span></h2>
  );
}

export { TodoCounter };