import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <form>
      <div className="flex gap-2 rounded-xl border border-solid border-blue-500 p-2.5">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full bg-transparent outline-none"
        />
        <button type="submit" className="text-blue-500">
          <SearchIcon size={18} />
        </button>
      </div>
    </form>
  );
}
