"use client";

import { useState } from "react";
import { AlertCircleIcon, LayoutGridIcon, Trash2Icon } from "lucide-react";

interface NavProps {
  setActiveFilter: (filter: string) => void;
}

export default function Nav({ setActiveFilter }: NavProps) {
  const navItems = [
    { text: "Tudo", icon: <LayoutGridIcon size={20} /> },
    { text: "Importante", icon: <AlertCircleIcon size={20} /> },
    { text: "Lixeira", icon: <Trash2Icon size={20} /> },
  ];
  const [active, setActive] = useState("Tudo");

  return (
    <nav className="flex gap-5 xl:flex-col">
      {navItems.map((item) => (
        <button
          key={item.text}
          onClick={() => {
            setActiveFilter(item.text);
            setActive(item.text);
          }}
          className={`flex h-10 w-10 items-center gap-2 rounded-xl p-2.5 text-lg xl:h-auto xl:w-auto ${active === item.text ? "bg-gray-200 duration-500" : ""}`}
        >
          <span className="text-blue-500">{item.icon}</span>
          <span className="hidden xl:flex">{item.text}</span>
        </button>
      ))}
    </nav>
  );
}
