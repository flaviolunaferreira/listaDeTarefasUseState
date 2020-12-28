import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  return (
    <div className="App">
      <TodoInput addTodo={ addTodo } />
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
