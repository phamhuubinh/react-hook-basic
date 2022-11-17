import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Minh')
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching youtube' },
    { id: 'todo2', title: 'Doing homework' },
    { id: 'todo3', title: 'Playing game' }
  ]);

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }
  const handleEventClick = () => {
    if (!address) {
      alert('emtpy input')
      return;
    }
    let newTodo = { id: '', title: address }
    setTodos([...todos, newTodo]);
    setAddress('');
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Xin chào {name}</h1>
        <div className='todo-container'>
          {todos.map(todo => {
            return (
              <li
                className='todo-child'
                style={{ textAlign: 'left' }}
                key={todo.id}
              >
                {todo.title}
              </li>
            )
          })}
        </div>
        <input
          type='text'
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button
          type='button'
          onClick={handleEventClick}>
          Click me
        </button>
      </header >
    </div >
  );
}

export default App;
