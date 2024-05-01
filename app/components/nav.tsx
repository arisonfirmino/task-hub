"use client";

import { useState } from "react";
import {
  CircleAlertIcon,
  LayoutGridIcon,
  SquareCheckBigIcon,
  Trash2Icon,
} from "lucide-react";

export default function Nav() {
  const [active, setActive] = useState("Tudo");

  const navItems = [
    { text: "Tudo", icon: <LayoutGridIcon size={18} /> },
    { text: "Importantes", icon: <CircleAlertIcon size={18} /> },
    { text: "Concluidas", icon: <SquareCheckBigIcon size={18} /> },
    { text: "Lixeira", icon: <Trash2Icon size={18} /> },
  ];

  return (
    <nav className="flex gap-5 xl:flex-col">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setActive(item.text)}
          className={`flex items-center gap-2 rounded-xl p-2.5 text-lg ${active === item.text ? "bg-gray-100" : ""}`}
        >
          <span className="text-blue-500">{item.icon}</span>
          <span className="hidden xl:flex">{item.text}</span>
        </button>
      ))}
    </nav>
  );
}
