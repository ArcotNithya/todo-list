import { useState } from 'react';
import './app.css';

export function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const add = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const del = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const complete = (index) => {
    alert(`Hurray, successfully completed a task!It's time to move to next`);
    del(index);
  };

  return (
    <div className="con">
    <h1>To-Do List</h1>
    <div className="con2">
    <input type="text" placeholder="Enter your task to be noted" value={task} onChange={(e) => setTask(e.target.value)}/>
    <button onClick={add}>Add a task</button>
    </div>
    <ul className="items"> {todos.map((item, index) => (
    <li key={index} className="items2">
    <span>{item}</span>
    <div className="buttons">
    <button onClick={() => complete(index)}>Completed</button>
    <button onClick={() => del(index)}>Delete</button>
    </div>
    </li>
     ))}
    </ul>
    </div>
  );
}


