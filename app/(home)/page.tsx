"use client";

import { useEffect, useState } from "react";
import Container from "../components/container";
import SideMenu from "../components/side-menu";
import Task from "../components/task";

export interface Task {
  id: string;
  task: string;
  important: boolean;
  completed: boolean;
  inTrash: boolean;
  created_at: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("Tudo");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Tudo") {
      return (
        !task.inTrash &&
        task.task.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (filter === "Importantes") {
      return (
        task.important &&
        task.task.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (filter === "Concluídas") {
      return (
        task.completed &&
        task.task.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (filter === "Lixeira") {
      return (
        task.inTrash &&
        task.task.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  const addTask = (newTask: Task) => {
    if (newTask.important) {
      newTask = { ...newTask, important: true };
    }
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <SideMenu
        addTask={addTask}
        setFilter={setFilter}
        handleSearch={handleSearch}
      />

      <section className="h-full w-full overflow-auto">
        <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 xl:grid-cols-5">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              updateTask={(updatedTask: Task) => {
                const updatedTasks = tasks.map((t) =>
                  t.id === updatedTask.id ? updatedTask : t,
                );
                setTasks(updatedTasks);
              }}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
