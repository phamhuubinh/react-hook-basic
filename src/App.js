import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav';
import React, { useState, useEffect } from 'react';
import Todo from './view/Todo';
import Covid from './view/Covid';

const App = () => {
  const [name, setName] = useState('Minh');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching youtube', type: 'Minh' },
    { id: 'todo2', title: 'Doing homework', type: 'Long' },
    { id: 'todo3', title: 'Playing game', type: 'Khanh' },
    { id: 'todo4', title: 'Learning reactJS', type: 'Hoang' }
  ]);

  useEffect(() => {

  }, []);

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  const handleEventClick = () => {
    if (!address) {
      alert('emtpy input')
      return;
    }
    let newTodo = {
      id: 'todo' + Math.floor((Math.random() * 1000) + 1),
      title: address,
      type: 'Minh'
    }
    setTodos([...todos, newTodo]);
    setAddress('');
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Xin chào {name}</h1>
        <Covid />
        {/* <Todo
          todos={todos}
          title='All Todos'
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter(item => item.type === 'Minh')}
          title={`Minh's todos`}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type='text'
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button
          type='button'
          onClick={handleEventClick}>
          Click me
        </button> */}
      </header >
    </div >
  );
}

export default App;
