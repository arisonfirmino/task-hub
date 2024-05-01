import Search from "./search";
import Nav from "./nav";
import Form from "./form";
import { Task } from "../(home)/page";
import Image from "next/image";

interface SideMenuProps {
  addTask: (newTask: Task) => void;
  setFilter: (filter: string) => void;
}

export default function SideMenu({ addTask, setFilter }: SideMenuProps) {
  return (
    <div className="flex h-fit w-full flex-col gap-5 p-5 shadow-md xl:h-full xl:min-w-80 xl:max-w-80 xl:shadow-2xl">
      <div className="flex items-center gap-2.5 text-blue-500">
        <Image
          src="/logo.png"
          alt="Logo"
          height={315}
          width={315}
          className="w-7"
        />
        <h3 className="text-xl font-medium">TaskHub</h3>
      </div>

      <Search />
      <Nav setFilter={setFilter} />

      <Form addTask={addTask} />
    </div>
  );
}
