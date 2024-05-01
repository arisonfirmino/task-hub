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
      return !task.inTrash;
    } else if (filter === "Importantes") {
      return task.important;
    } else if (filter === "Concluidas") {
      return task.completed;
    } else if (filter === "Lixeira") {
      return task.inTrash;
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

  return (
    <Container>
      <SideMenu addTask={addTask} setFilter={setFilter} />

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
