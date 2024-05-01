"use client";

import { useState } from "react";
import {
  CheckCheckIcon,
  CheckIcon,
  CircleAlertIcon,
  Trash2Icon,
} from "lucide-react";
import { Task as TaskProps } from "../(home)/page";

interface TaskComponentProps {
  task: TaskProps;
  updateTask: (updatedTask: TaskProps) => void;
}

export default function Task({ task, updateTask }: TaskComponentProps) {
  const [isImportant, setIsImportant] = useState(task.important);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  return (
    <div
      className={`rounded-xl border border-solid p-2.5 duration-500 xl:hover:scale-105 ${isImportant ? "border-yellow-400" : "border-blue-500"}`}
    >
      <p className="text-end text-xs font-light text-gray-400">
        {task.created_at}
      </p>

      <p
        className={`overflow-hidden text-ellipsis text-nowrap text-lg ${isCompleted ? "text-gray-400 line-through" : ""}`}
      >
        {task.task}
      </p>

      <div className="mt-2.5 flex items-center justify-center gap-2">
        <button
          onClick={() => {
            setIsImportant(!isImportant);
            updateTask({ ...task, important: !isImportant });
          }}
          className={`rounded bg-gray-100 p-1 ${isImportant ? "text-yellow-400" : "text-gray-600"}`}
        >
          <CircleAlertIcon size={16} />
        </button>

        <button
          onClick={() => {
            setIsCompleted(!isCompleted);
            updateTask({ ...task, completed: !isCompleted });
          }}
          className={`rounded bg-gray-100 p-1 ${isCompleted ? "text-green-500" : "text-gray-600"}`}
        >
          {isCompleted ? <CheckCheckIcon size={16} /> : <CheckIcon size={16} />}
        </button>

        <button className="rounded bg-gray-100 p-1 text-gray-600">
          <Trash2Icon size={16} />
        </button>
      </div>
    </div>
  );
}
