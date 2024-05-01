"use client";

import { useState } from "react";
import {
  CheckCheckIcon,
  CheckIcon,
  CircleAlertIcon,
  Trash2Icon,
} from "lucide-react";

interface TaskProps {
  text: string;
  important: boolean;
  completed: boolean;
  created_at: string;
}

export default function Task({
  text,
  important,
  completed,
  created_at,
}: TaskProps) {
  const [isImportant, setIsImportant] = useState(important);
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div
      className={`rounded-xl border border-solid p-2.5 duration-500 xl:hover:scale-105 ${isImportant ? "border-yellow-400" : "border-blue-500"}`}
    >
      <p className="text-end text-xs font-light text-gray-400">{created_at}</p>

      <p
        className={`overflow-hidden text-ellipsis text-nowrap text-lg ${isCompleted ? "text-gray-400 line-through" : ""}`}
      >
        {text}
      </p>

      <div className="mt-2.5 flex items-center justify-center gap-2">
        <button
          onClick={() => setIsImportant(!isImportant)}
          className={`rounded bg-gray-100 p-1 ${isImportant ? "text-yellow-400" : "text-gray-600"}`}
        >
          <CircleAlertIcon size={16} />
        </button>

        <button
          onClick={() => setIsCompleted(!isCompleted)}
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
