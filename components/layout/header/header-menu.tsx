"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Constants
import { HEADER_DATA } from "@/constants";

const HeaderMenu = () => {
  const pathName = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center justify-center gap-8 text-sm capitalize font-normal text-light-color">
      {HEADER_DATA?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-shop-light-green hoverEffect relative group ${
            pathName === item?.href && "text-shop-light-green"
          }`}
        >
          {item?.title}

          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 group-hover:w-1/2 h-0.5 bg-shop-light-green hoverEffect group-hover:left-0 ${
              pathName === item?.href && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 group-hover:w-1/2 h-0.5 bg-shop-light-green hoverEffect group-hover:right-0 ${
              pathName === item?.href && "w-1/2"
            }`}
          />
          <span />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
