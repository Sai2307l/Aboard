import React from "react";
import { Title } from "../ui/title";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";
function HomeBanner() {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-4">
        <Title>
          Grab Upto 50% off on <br />
          Your First Purchase
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_btn_dark_green/90 text-white/90
        px-5 py-2 rounded-md text-sm font-semibold hover:bg-shop_btn_dark_green hover:text-white hoverEffect"
        >
          Shop Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
