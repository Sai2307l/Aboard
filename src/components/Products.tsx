import React from "react";
import NoProductAvailable from "./NoProduct";
import { AnimatePresence, motion } from "motion/react";
import { Product } from "../../sanity.types";
import ProductCard from "./ProductCard";
function Products({
  products,
  selectedTab,
}: {
  readonly products: readonly Product[];
  selectedTab?: string;
}) {
  return products.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
      {products?.map((product) => (
        <AnimatePresence key={product?._id}>
          <motion.div
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProductCard key={product?._id} product={product} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  ) : (
    <NoProductAvailable selectedTab={selectedTab} className="mt-10" />
  );
}

export default Products;
