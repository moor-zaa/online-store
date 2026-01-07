import Link from "next/link";
import { FC } from "react";

// Components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Constants
import { SOCIAL_MEDIA } from "@/constants";

// Utilities
import { cn } from "@/lib/utils";

interface SocialsProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const Socials: FC<SocialsProps> = ({
  className,
  iconClassName,
  tooltipClassName,
}) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {SOCIAL_MEDIA?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                rel="moopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop-light-green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn("bg-white text-dark-color", tooltipClassName)}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default Socials;
