import React, { useState } from "react";

//Crear los estados para la tarea y la lista de tareas

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Sacar la ropa",
    "Hacer la cama",
    "Leer un rato",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };
  console.log(tasks);
  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {tasks.map((element, index) => (
            <li key={index + 1}>{element}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
