"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";

interface SearchProps {
  setSearchTerm: (term: string) => void;
}

export default function Search({ setSearchTerm }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setSearchTerm(query);
  };

  return (
    <div className="flex gap-2 rounded-xl border border-solid border-blue-500 p-2.5">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Buscar"
        className="w-full bg-transparent outline-none"
      />
      <button className="text-blue-500">
        <SearchIcon size={18} />
      </button>
    </div>
  );
}
