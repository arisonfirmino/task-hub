"use client";

import { useEffect, useState, useCallback } from "react";
import { ListTodoIcon } from "lucide-react";
import Search from "../components/search";
import Nav from "../components/nav";
import AddNewTask from "../components/add-new-task";
import Task from "../components/task";

interface TaskType {
  id: string;
  content: string;
  important: boolean;
  isTrashed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);
  const [activeFilter, setActiveFilter] = useState("Tudo");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks: TaskType[] = JSON.parse(storedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  useEffect(() => {
    let updatedTasks = tasks.filter((task) => !task.isTrashed);

    if (searchTerm.trim() !== "") {
      updatedTasks = updatedTasks.filter((task) =>
        task.content.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (activeFilter === "Importante") {
      updatedTasks = updatedTasks.filter((task) => task.important);
    } else if (activeFilter === "Lixeira") {
      updatedTasks = tasks.filter((task) => task.isTrashed);
    }

    setFilteredTasks(updatedTasks);
  }, [activeFilter, searchTerm, tasks]);

  const addTask = useCallback(
    (newTask: string) => {
      const newId = Math.random().toString(36).substr(2, 9);
      const updatedTasks = [
        ...tasks,
        { id: newId, content: newTask, important: false, isTrashed: false },
      ];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [tasks],
  );

  const updateTask = useCallback(
    (taskId: string, important: boolean, isTrashed: boolean) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, important, isTrashed } : task,
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [tasks],
  );

  const restoreTask = useCallback(
    (taskId: string) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, isTrashed: false } : task,
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [tasks],
  );

  const deleteTask = useCallback(
    (taskId: string) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [tasks],
  );

  return (
    <main className="flex min-h-screen w-full">
      <section className="h-screen min-w-80 p-5 shadow-2xl">
        <div className="relative flex h-full flex-col gap-5">
          <div className="flex items-center gap-2 text-blue-500">
            <ListTodoIcon size={24} />
            <h2 className="text-xl font-medium">TaskHub</h2>
          </div>

          <Search setSearchTerm={setSearchTerm} />
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
              isTrashed={task.isTrashed}
              updateTask={updateTask}
              restoreTask={restoreTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
