import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList';
import { InputForm }from './component/InputForm';

function App() {
  return (
    <div className="App">
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
