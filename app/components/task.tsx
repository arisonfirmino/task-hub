"use client";

import { useState } from "react";
import {
  AlertCircleIcon,
  CheckCheckIcon,
  CheckIcon,
  Trash2Icon,
} from "lucide-react";

interface TaskProps {
  content: string;
}

export default function Task({ content }: TaskProps) {
  const [important, setImportant] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col overflow-hidden rounded-xl bg-gray-200">
        <div
          className={`flex justify-end p-2.5 ${important ? "bg-yellow-400" : "bg-blue-500"}`}
        >
          <button
            onClick={() => setImportant(!important)}
            className="text-white"
          >
            <AlertCircleIcon size={18} />
          </button>
        </div>

        <div className="p-2.5">
          <p
            className={`overflow-hidden text-ellipsis text-nowrap text-lg ${checked ? "text-gray-400 line-through" : ""}`}
          >
            {content}
          </p>
        </div>

        <div className="flex justify-end gap-2.5 p-2.5">
          <button
            onClick={() => setChecked(!checked)}
            className={`items-item flex justify-start ${checked ? "text-green-600" : ""}`}
          >
            {checked && <CheckCheckIcon size={20} />}
            {!checked && <CheckIcon size={20} />}
          </button>

          <button className="items-item flex justify-start text-red-600">
            <Trash2Icon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
