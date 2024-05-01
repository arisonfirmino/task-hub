"use client";

import { useState } from "react";
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
  console.log(tasks);

  const addTask = (newTask: Task) => {
    if (newTask.important) {
      newTask = { ...newTask, important: true };
    }
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Tudo") {
      return true;
    } else if (filter === "Importantes") {
      return task.important;
    } else if (filter === "Concluidas") {
      return task.completed;
    } else if (filter === "Lixeira") {
      return task.inTrash;
    }
    return true;
  });

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
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
