"use client";

import { useEffect, useState } from "react";
import { ListTodoIcon } from "lucide-react";
import Search from "../components/search";
import Nav from "../components/nav";
import AddNewTask from "../components/add-new-task";
import Task from "../components/task";

interface TaskType {
  id: string;
  content: string;
  important: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);
  const [activeFilter, setActiveFilter] = useState("Tudo");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks: TaskType[] = JSON.parse(storedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  useEffect(() => {
    if (activeFilter === "Tudo") {
      setFilteredTasks(tasks);
    } else if (activeFilter === "Importante") {
      const importantTasks = tasks.filter((task) => task.important);
      setFilteredTasks(importantTasks);
    } else if (activeFilter === "Lixeira") {
    }
  }, [activeFilter, tasks]);

  const addTask = (newTask: string) => {
    const newId = Math.random().toString(36).substr(2, 9);
    const updatedTasks = [
      ...tasks,
      { id: newId, content: newTask, important: false },
    ];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const updateTask = (taskId: string, important: boolean) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, important };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <main className="flex min-h-screen w-full">
      <section className="h-screen min-w-80 p-5 shadow-2xl">
        <div className="relative flex h-full flex-col gap-5">
          <div className="flex items-center gap-2 text-blue-500">
            <ListTodoIcon size={24} />
            <h2 className="text-xl font-medium">TaskHub</h2>
          </div>

          <Search />
          <Nav setActiveFilter={setActiveFilter} />

          <div className="absolute bottom-0 w-full">
            <AddNewTask addTask={addTask} />
          </div>
        </div>
      </section>

      <section className="h-screen w-full overflow-auto">
        <div className="grid w-full grid-cols-5 gap-5 p-5">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              important={task.important}
              updateTask={updateTask}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
