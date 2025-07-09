"use client";
import { cn } from "@/lib/utils";
import { Product } from "../../sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
const ProductSideMenu = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  useEffect(() => {
    const availableProduct = favoriteProduct?.find(
      (item: Product) => item?._id === product?._id
    );
    setExistingProduct(availableProduct ?? null);
  }, [product, favoriteProduct]);
  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? "Product removed successfully!"
            : "Product added successfully!"
        );
      });
    }
  };
  return (
    <div
      className={cn("absolute top-2 right-2 hover:cursor-pointer", className)}
    >
      <Button
        type="button"
        onClick={handleFavorite}
        aria-pressed={!!existingProduct}
        aria-label={
          existingProduct ? "Remove from favorites" : "Add to favorites"
        }
        className={`p-2.5 rounded-full hover:bg-shop_dark_green/80 hover:text-white hoverEffect  ${
          existingProduct
            ? "bg-shop_dark_green/80 text-white"
            : "bg-lightColor/10"
        }`}
      >
        <Heart size={15} />
      </Button>
    </div>
  );
};

export default ProductSideMenu;
