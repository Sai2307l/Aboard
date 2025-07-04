import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h2
      className={cn(
        "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green transition-colors hoverEffect group font-sans",
        className
      )}
    >
      <Link href="/">
        <span className="text-shop_light_green group-hover:text-shop_dark_green">
          A
        </span>
        board
      </Link>
    </h2>
  );
};

export default Logo;
