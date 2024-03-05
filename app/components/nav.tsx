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
    <nav className="flex flex-col gap-5">
      {navItems.map((item) => (
        <button
          key={item.text}
          onClick={() => {
            setActiveFilter(item.text);
            setActive(item.text);
          }}
          className={`flex items-center gap-2 rounded-xl p-2.5 text-lg ${active === item.text ? "bg-gray-200 duration-500" : ""}`}
        >
          <span className="text-blue-500">{item.icon}</span>
          <span>{item.text}</span>
        </button>
      ))}
    </nav>
  );
}
