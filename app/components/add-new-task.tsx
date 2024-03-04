"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";

interface AddNewTaskProps {
  addTask: (newTask: string) => void;
}

export default function AddNewTask({ addTask }: AddNewTaskProps) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2.5">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicione uma nova tarefa"
          className="rounded-xl border border-solid border-blue-500 p-2.5 outline-none"
        />

        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl p-2.5 text-lg active:bg-gray-200"
        >
          <PlusIcon size={20} className="text-blue-500" />
          Adicionar
        </button>
      </div>
    </form>
  );
}
