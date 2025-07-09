import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
function HomeTabBar({
  selectedTab,
  setSelectedTab,
}: {
  readonly selectedTab: string;
  readonly setSelectedTab: (tab: string) => void;
}) {
  return (
    <div className="flex items-center justify-between flex-wrap p-4 gap-4">
      <div className="flex items-center gap-2">
        {productType?.map((item) => (
          <Button
            variant={"ghost"}
            key={item?.title}
            onClick={() => setSelectedTab(item?.title)}
            className={cn(
              "hover:bg-shop_light_green/80 hover:text-white font-semibold hoverEffect bg-lime-100/80",
              selectedTab === item?.title
                ? "bg-shop_light_green text-white"
                : ""
            )}
          >
            {item?.title}
          </Button>
        ))}
      </div>
      <Link href={"/shop"}>
        <Button
          variant={"ghost"}
          className="hover:bg-shop_light_green/80 hover:text-white font-semibold hoverEffect
           max-sm:hidden"
        >
          See All
        </Button>
      </Link>
    </div>
  );
}

export default HomeTabBar;
