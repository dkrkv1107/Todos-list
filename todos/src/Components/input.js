import React from "react";
import './input.css';

const Input = ({setInputText}) => {
const inputTextHandler = (e) => {
    setInputText(e.target.value);
}
    return (
<div className="form">
    <input onChange={inputTextHandler} type="text" className="todos-imput" placeholder="Enter new task" />
    <button className="add-task" type="submit">Add task</button>
</div>
    

    );
}
export default Input;