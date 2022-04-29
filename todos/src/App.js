import Input from './Components/Input';
import './App.css';
import List from './Components/List';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([ ]);
  return (
    <div className="App">
      <header>Things To do</header>
      <List />
      <Input setInputText={setInputText}/>
    </div>
  );
}

export default App;
