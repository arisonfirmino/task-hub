"use client";

import { useState } from "react";
import {
  CheckCheckIcon,
  CheckIcon,
  CircleAlertIcon,
  RotateCcwIcon,
  Trash2Icon,
} from "lucide-react";
import { Task as TaskProps } from "../(home)/page";

interface TaskComponentProps {
  task: TaskProps;
  updateTask: (updatedTask: TaskProps) => void;
  deleteTask: (taskId: string) => void;
}

export default function Task({
  task,
  updateTask,
  deleteTask,
}: TaskComponentProps) {
  const [isImportant, setIsImportant] = useState(task.important);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleRecoverTask = () => {
    updateTask({ ...task, inTrash: false });
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <div
      className={`rounded-xl border border-solid p-2.5 duration-500 xl:hover:scale-105 ${task.important ? "border-yellow-400" : "border-blue-500"} ${task.inTrash ? "border-red-600" : "border-blue-500"}`}
    >
      <p className="text-end text-xs font-light text-gray-400">
        {task.created_at}
      </p>

      <p
        className={`overflow-hidden text-ellipsis text-nowrap text-lg ${task.completed ? "text-gray-400 line-through" : ""}`}
      >
        {task.task}
      </p>

      {task.inTrash ? (
        <div className="mt-2.5 flex items-center justify-center gap-2.5">
          <button
            onClick={handleRecoverTask}
            className="rounded bg-gray-100 p-1 text-gray-600 active:text-blue-500"
          >
            <RotateCcwIcon size={16} />
          </button>

          <button
            onClick={handleDeleteTask}
            className="rounded bg-gray-100 p-1 text-gray-600 active:text-red-600"
          >
            <Trash2Icon size={16} />
          </button>
        </div>
      ) : (
        <div className="mt-2.5 flex items-center justify-center gap-2.5">
          <button
            onClick={() => {
              setIsImportant(!isImportant);
              updateTask({ ...task, important: !isImportant });
            }}
            className={`rounded bg-gray-100 p-1 ${task.important ? "text-yellow-400" : "text-gray-600"}`}
          >
            <CircleAlertIcon size={16} />
          </button>

          <button
            onClick={() => {
              setIsCompleted(!isCompleted);
              updateTask({ ...task, completed: !isCompleted });
            }}
            className={`rounded bg-gray-100 p-1 ${task.completed ? "text-green-500" : "text-gray-600"}`}
          >
            {task.completed ? (
              <CheckCheckIcon size={16} />
            ) : (
              <CheckIcon size={16} />
            )}
          </button>

          <button
            onClick={() => {
              updateTask({ ...task, inTrash: true });
            }}
            className="rounded bg-gray-100 p-1 text-gray-600 active:text-red-600"
          >
            <Trash2Icon size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
