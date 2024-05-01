import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <form>
      <div className="flex gap-2 rounded-xl border border-solid border-blue-500 p-2.5">
        <button type="submit" className="text-blue-500">
          <SearchIcon size={16} />
        </button>
        <input
          type="search"
          placeholder="Buscar"
          className="w-full bg-transparent outline-none"
        />
      </div>
    </form>
  );
}
