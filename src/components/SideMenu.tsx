import React from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useOutsideClick } from "@/hooks/index";
import MenuItems from "@/constants/data";
import SocialMedia from "@/components/SocialMedia";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function SideMenu({ isOpen, onClose }: Readonly<SideMenuProps>) {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) {
      onClose();
    }
  });

  return (
    <div
      className={`fixed inset-y-0 z-50 h-screen left-0 w-full bg-black/50 text-white/70 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-4 font-semibold tracking-wide">
          {MenuItems?.map((item) => (
            <Link
              key={item?.label}
              className={cn(
                "hover:text-shop_light_green hoverEffect",
                pathname === item?.href ? "text-white" : ""
              )}
              href={item?.href}
            >
              <span>{item?.label}</span>
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default SideMenu;
