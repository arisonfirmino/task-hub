import { ListTodoIcon } from "lucide-react";
import Search from "./search";
import Nav from "./nav";
import Form from "./form";

export default function SideMenu() {
  return (
    <div className="flex h-fit w-full flex-col gap-5 p-5 shadow-2xl xl:h-full xl:min-w-80 xl:max-w-80">
      <div className="flex items-center gap-2.5 text-blue-500">
        <ListTodoIcon size={20} />
        <h3 className="text-xl font-medium">TaskHub</h3>
      </div>

      <Search />
      <Nav />

      <Form />
    </div>
  );
}
