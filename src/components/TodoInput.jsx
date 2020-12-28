import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = ({target}) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('')
  }

  return (
    <section>
      <label htmlFor="addTodo">
        Inserir uma Tarefa:
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          name="newTodo"
          id="newTodo"
        />
      </label>
      <button onClick={handleClick}>AdicionarTarefa</button>
    </section>
  );
}

export default TodoInput;
