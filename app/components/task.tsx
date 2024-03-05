"use client";

import { useEffect, useState } from "react";
import {
  AlertCircleIcon,
  CheckCheckIcon,
  CheckIcon,
  RotateCcwIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";

interface TaskProps {
  content: string;
  id: string;
  important: boolean;
  isTrashed: boolean;
  updateTask: (taskId: string, important: boolean, isTrashed: boolean) => void;
  restoreTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export default function Task({
  content,
  id,
  important,
  isTrashed,
  updateTask,
  restoreTask,
  deleteTask,
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
    updateTask(id, isImportant, isTrashed);
  };

  const handleImportantChange = () => {
    setIsImportant(!isImportant);
    updateTask(id, !isImportant, isTrashed);
  };

  const handleTrashClick = () => {
    if (isTrashed) {
      deleteTask(id);
    } else {
      updateTask(id, isImportant, true);
    }
  };

  const handleRestoreClick = () => {
    restoreTask(id);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col overflow-hidden rounded-xl bg-gray-200">
        <div
          className={`flex justify-end p-2.5 ${isImportant ? "bg-yellow-400" : "bg-blue-500"}`}
        >
          <button
            onClick={handleImportantChange}
            className={`text-white ${isTrashed ? "hidden" : "flex"}`}
          >
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

        {!isTrashed && (
          <div className="flex justify-end gap-2.5 p-2.5">
            <button
              onClick={handleCheckboxChange}
              className={isChecked ? "text-green-600" : ""}
            >
              {isChecked && <CheckCheckIcon size={20} />}
              {!isChecked && <CheckIcon size={20} />}
            </button>

            <button
              onClick={handleTrashClick}
              className="items-item flex justify-start text-red-600"
            >
              <Trash2Icon size={20} />
            </button>
          </div>
        )}

        {isTrashed && (
          <div className="flex justify-end gap-2.5 p-2.5">
            <button onClick={handleRestoreClick}>
              <RotateCcwIcon size={20} />
            </button>

            <button onClick={handleTrashClick} className="text-red-600">
              <XIcon size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
