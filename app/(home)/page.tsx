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
  console.log(tasks);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Container>
      <SideMenu addTask={addTask} />

      <section className="h-full w-full overflow-auto">
        <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 xl:grid-cols-5">
          {tasks.map((task) => (
            <Task
              key={task.id}
              text={task.task}
              important={task.important}
              completed={task.completed}
              created_at={task.created_at}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
