"use client";
import React from "react";
import menuItems from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
function HeaderMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor ">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "hover:text-shop_light_green hoverEffect relative group",
            {
              "text-shop_light_green": pathname === item.href,
            }
          )}
        >
          {item.label}
          <span
            className={cn(
              "absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:bg-shop_dark_green group-hover:left-0",
              { "w-1/2": pathname === item.href }
            )}
          />
          <span
            className={cn(
              "absolute -bottom-0.5 right-1/2 h-0.5 w-0 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:bg-shop_dark_green group-hover:right-0",
              { "w-1/2": pathname === item.href }
            )}
          />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
