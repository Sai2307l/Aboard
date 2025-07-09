import { BRANDS_QUERYResult } from "../../../sanity.types";
import React from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  brands: BRANDS_QUERYResult;
  selectedBrand?: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">Brands</Title>
      <RadioGroup
        value={selectedBrand ?? ""}
        onValueChange={setSelectedBrand}
        className="mt-2 space-y-1"
      >
        {brands?.map((brand) => (
          <div key={brand?._id} className="flex items-center space-x-2">
            <RadioGroupItem
              value={brand?.slug?.current as string}
              id={brand?.slug?.current}
              className="rounded-sm"
            />
            <Label
              htmlFor={brand?.slug?.current}
              className={`hover:cursor-pointer ${
                selectedBrand === brand?.slug?.current
                  ? "font-semibold text-shop_dark_green"
                  : "font-normal"
              }`}
            >
              {brand?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default BrandList;
