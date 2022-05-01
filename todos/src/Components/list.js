import React from 'react'
import Todo from './Todo';

function List({todos, setTodos}) {
  return (
   <div className='todo-container'>
       <ul className='todos-list'>
        {todos.map((todo) => (
          <Todo 
          text={todo.text} 
          key={todo.id} 
          setTodos={setTodos} 
          todos={todos} 
          todo={todo}/>
        ))}
       </ul>
   </div>
  );
}

export default List;