import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((item) => {
            let cssClass = "w-full text-left px-2 py-1 my-1 border-b-2 border-stone-700 hover:border-stone-200 rounded-sm ";
            if(item.id === selectedProjectId) {
                cssClass += "bg-stone-400 text-stone-800"
            }
            else {
                cssClass += "text-stone-400"
            }
          return (
            <li key={item.id}>
              <button
                onClick={() => onSelectProject(item.id)}
                className={cssClass}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
