"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { Task } from "../(home)/page";

interface FormProps {
  addTask: (newTask: Task) => void;
}

const schema = yup.object({
  task: yup.string().required(),
});

export default function Form({ addTask }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { task: string }) => {
    const newTask = {
      id: uuidv4(),
      task: data.task,
      important: false,
      completed: false,
      inTrash: false,
      created_at: format(new Date(), "dd/MM/yyyy"),
    };

    addTask(newTask);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-end gap-2.5 xl:h-full"
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register("task")}
        className={`rounded-xl border border-solid p-2.5 outline-none ${errors.task ? "border-red-600" : "border-blue-500"}`}
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-500 p-2.5 text-white active:bg-gray-400"
      >
        Adicionar
      </button>
    </form>
  );
}
