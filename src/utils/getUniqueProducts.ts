import { IProduct } from "@/models/IProduct";

export default function getUniqueProducts(products: IProduct[]) {
  const hashMap: { [key: string]: boolean } = {};

  return products.filter((product) => {
    if (!hashMap[product.id]) {
      hashMap[product.id] = true;
      return true;
    }
    return false;
  });
}
