"use client";

import { useEffect, useState } from "react";
import {
  AlertCircleIcon,
  CheckCheckIcon,
  CheckIcon,
  Trash2Icon,
} from "lucide-react";

interface TaskProps {
  content: string;
  id: string;
  important: boolean;
  updateTask: (taskId: string, important: boolean) => void;
}

export default function Task({
  content,
  id,
  important,
  updateTask,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isImportant, setIsImportant] = useState(important);

  useEffect(() => {
    setIsImportant(important);
  }, [important]);

  useEffect(() => {
    setIsChecked(localStorage.getItem(`task_${id}_checked`) === "true");
  }, [id]);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    localStorage.setItem(`task_${id}_checked`, newCheckedState.toString());
    updateTask(id, isImportant);
  };

  const handleImportantChange = () => {
    setIsImportant(!isImportant);
    updateTask(id, !isImportant);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col overflow-hidden rounded-xl bg-gray-200">
        <div
          className={`flex justify-end p-2.5 ${isImportant ? "bg-yellow-400" : "bg-blue-500"}`}
        >
          <button onClick={handleImportantChange} className="text-white">
            <AlertCircleIcon size={18} />
          </button>
        </div>

        <div className="p-2.5">
          <p
            className={`overflow-hidden text-ellipsis text-nowrap text-lg ${isChecked ? "text-gray-400 line-through" : ""}`}
          >
            {content}
          </p>
        </div>

        <div className="flex justify-end gap-2.5 p-2.5">
          <button
            onClick={handleCheckboxChange}
            className={isChecked ? "text-green-600" : ""}
          >
            {isChecked && <CheckCheckIcon size={20} />}
            {!isChecked && <CheckIcon size={20} />}
          </button>

          <button className="items-item flex justify-start text-red-600">
            <Trash2Icon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
