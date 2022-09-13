import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault(e);
    // console.log(title, description)

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-2 text-center">Crea tu tarea con React</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe aca tu nueva Tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-yellow-500 px-3 py-1 align-items-center">Guardar</button>
      </form>
    </div>
  );
}
export default TaskForm;
