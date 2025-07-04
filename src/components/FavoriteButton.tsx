import React from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
function FavoriteButton() {
  return (
    <Link href="/favorites" className="group relative">
      <Heart className="w-5 h-5 hoverEffect hover:text-shop_light_green" />
      <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
  );
}

export default FavoriteButton;
