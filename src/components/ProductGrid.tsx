"use client";
import React, { useEffect, useState } from "react";
import HomeTabBar from "./home/HomeTabBar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import Products from "./Products";
import { Product } from "../../sanity.types";

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
  const params = { variant: selectedTab.toLowerCase() };
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        console.log("Fetched products:", response);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [selectedTab]);
  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
          <div className="space-x-2 flex items-center text-shop_light_green text-lg font-semibold">
            <Loader2 className="animate-spin text-shop_light_green" />
            <span>Loading products...</span>
          </div>
        </div>
      ) : (
        <Products products={products} selectedTab={selectedTab} />
      )}
    </div>
  );
}

export default ProductGrid;
