import React from "react";
import './input.css';

const Input = ({setInputText, todos, setTodos, inputText}) => {
const inputTextHandler = (e) => {
    setInputText(e.target.value);
}
const submitTodoHandler = (e) => {
    setTodos([
    ...todos,{text: inputText, id: Math.random }
    ]);
    setInputText("");
};
    return (
<div className="form">
    <input value={inputText} onChange={inputTextHandler} type="text" className="todos-imput" placeholder="Enter new task" />
    <button onClick={submitTodoHandler} className="add-task" type="submit">Add task</button>
</div>
    

    );
}
export default Input;