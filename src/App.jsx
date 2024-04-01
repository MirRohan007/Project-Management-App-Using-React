import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleSaveProject = (projectData) => {
    const projectId = Math.random() * 10000;
    const newProject = {
      ...projectData,
      id: projectId,
    };
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  const handleAddTask = (text) => {
    const taskId = Math.random() * 10000;
    const newTask = {
      id: taskId,
      projectId: projectsState.selectedProjectId,
      text: text,
    };
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: projectsState.selectedProjectId,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  };

  const handleCancelProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  };

  let projectSelected = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks.filter((task) => task.projectId === projectsState.selectedProjectId)

  let content = (
    <SelectedProject
      project={projectSelected}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onSave={handleSaveProject} onCancel={handleCancelProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
