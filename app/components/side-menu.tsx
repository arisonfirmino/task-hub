import { ListTodoIcon } from "lucide-react";
import Search from "./search";
import Nav from "./nav";
import Form from "./form";
import { Task } from "../(home)/page";

interface SideMenuProps {
  addTask: (newTask: Task) => void;
}

export default function SideMenu({ addTask }: SideMenuProps) {
  return (
    <div className="flex h-fit w-full flex-col gap-5 p-5 shadow-md xl:h-full xl:min-w-80 xl:max-w-80 xl:shadow-2xl">
      <div className="flex items-center gap-2.5 text-blue-500">
        <ListTodoIcon size={20} />
        <h3 className="text-xl font-medium">TaskHub</h3>
      </div>

      <Search />
      <Nav />

      <Form addTask={addTask} />
    </div>
  );
}
