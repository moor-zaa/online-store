import { FC, ReactNode } from "react";

// Utilities
import { cn } from "@/lib/utils";

const Container: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-xl mx-auto px-4", className)}>{children}</div>
  );
};

export default Container;
