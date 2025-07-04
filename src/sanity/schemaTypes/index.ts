import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import orderType from "./orderType";
import { productType } from "./productType";
import { addressType } from "./addressType";
import { authorType } from "./authorType";
import { blogCategoryType } from "./blogCategoryType";
import { blockContentType } from "./blockContentType";
import { blogType } from "./blogType";
import { brandType } from "./brandType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    orderType,
    productType,
    addressType,
    authorType,
    blogCategoryType,
    blockContentType,
    blogType,
    brandType,
  ],
};
