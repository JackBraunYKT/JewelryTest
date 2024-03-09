import { IProduct } from "@/models/IProduct";
import formatCurrency from "@/utils/formatCurrency";

interface Props {
  product: IProduct;
}

export default function ProductItem({ product }: Props) {
  return (
    <div className="flex flex-col justify-between bg-white border border-solid rounded-lg px-4 py-5 shadow-sm text-center">
      <div className="flex items-center flex-col">
        <p className="text-[8px] text-gray-400">ID: {product.id}</p>
        <h3 className="text-sm font-semibold">{product.product}</h3>
        {product.brand && (
          <p className="text-xs text-gray-400">Брэнд: {product.brand}</p>
        )}
      </div>
      <div className="mt-1 text-lg">{formatCurrency(product.price)}</div>
    </div>
  );
}
