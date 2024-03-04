"use client";

import { useState } from "react";
import { ListTodoIcon } from "lucide-react";
import Search from "../components/search";
import Nav from "../components/nav";
import AddNewTask from "../components/add-new-task";
import Task from "../components/task";

interface TaskType {
  id: string;
  content: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (newTask: string) => {
    const newId = Math.random().toString(36).substr(2, 9);
    setTasks([...tasks, { id: newId, content: newTask }]);
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
          <Nav />

          <div className="absolute bottom-0 w-full">
            <AddNewTask addTask={addTask} />
          </div>
        </div>
      </section>

      <section className="h-screen w-full overflow-auto">
        <div className="grid w-full grid-cols-5 gap-5 p-5">
          {tasks.map((task) => (
            <Task key={task.id} content={task.content} />
          ))}
        </div>
      </section>
    </main>
  );
}
