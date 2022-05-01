import Input from './Components/Input';
import './App.css';
import List from './Components/List';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([ ]);
  return (
    <div className="App">
      <header>THINGS TO DO</header>
      <List todos={todos} setTodos={setTodos} />
      <Input inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    </div>
  );
}

export default App;
