import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";
import { TooltipContent } from "@radix-ui/react-tooltip";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: <FacebookIcon className="w-5 h-5" />,
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com",
    icon: <TwitterIcon className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: <InstagramIcon className="w-5 h-5" />,
  },
  {
    label: "GitHub",
    href: "https://www.github.com",
    icon: <GithubIcon className="w-5 h-5" />,
  },
];

function SocialMedia({
  className,
  iconClassName,
  tooltipClassName,
}: Readonly<Props>) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.label}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold shadow-lg p-1",
                tooltipClassName
              )}
            >
              {item?.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
