import { ListTodoIcon } from "lucide-react";
import Search from "../components/search";
import Nav from "../components/nav";
import AddNewTask from "../components/add-new-task";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full">
      <section className="fixed h-full w-80 p-5 shadow-2xl">
        <div className="relative flex h-full flex-col gap-5">
          <div className="flex items-center gap-2 text-blue-500">
            <ListTodoIcon size={24} />
            <h2 className="text-xl font-medium">TaskHub</h2>
          </div>

          <Search />
          <Nav />

          <div className="absolute bottom-0 w-full">
            <AddNewTask />
          </div>
        </div>
      </section>
    </main>
  );
}
