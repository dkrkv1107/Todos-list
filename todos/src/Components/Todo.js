import React from 'react'
import './todo.css';

function Todo({text, todo, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
  return (
    <div className='todo'>
        <li onClick={completeHandler} className={`todos-list ${todo.completed ? "completed" : " "}`}>{text}</li>
        
        <button onClick={deleteHandler} className='delete'>delete</button>
    </div>
  )
};

export default Todo