"use client";

import { AlignLeft } from "lucide-react";
import { useState } from "react";

// Components
import SideMenu from "./side-menu";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
        <AlignLeft className="hover:text-dark-color hoverEffect md:hidden cursor-pointer" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
