import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-sm bg-stone-100">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between my-4 bg-stone-300 p-4 rounded-md"
            >
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-200 p-1 rounded-lg bg-red-500 hover:bg-red-700"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
