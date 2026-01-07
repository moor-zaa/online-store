import Link from "next/link";
import { FC } from "react";

// Utilities
import { cn } from "@/lib/utils";

const Logo: FC<{ className?: string; spanClass?: string }> = ({
  className,
  spanClass,
}) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl text-shop-btn_dark_green font-black tracking-wider uppercase hover:text-shop-light-green hoverEffect group font-sans",
          className
        )}
      >
        Shopcar
        <span
          className={cn(
            "text-shop-light-green group-hover:text-shop-btn_dark_green hoverEffect",
            spanClass
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
