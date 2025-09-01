import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const tasksCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="App">
      <h1>Todos</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Введите новую задачу"
      />
      <button onClick={addTask}>Добавить задачу</button>
      <div className="tasks__wrapper">
        <h2>Общий список задач</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
      <h3>Количество оставшихся задач: {tasksCount}</h3>
      <button onClick={clearCompleted}>Очистить выполненные</button>
    </div>
  );
}

export default App;
