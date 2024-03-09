import ProductItem from "@/components/Products/ProductItem";
import { IProduct } from "@/models/IProduct";

interface Props {
  products: IProduct[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid gap-3 mb-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
