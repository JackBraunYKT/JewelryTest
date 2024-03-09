import React from "react";
import Filter from "@/components/Filter";
import { useFetchIds } from "@/api/queries";
import ProductGridSkeleton from "@/components/Products/ProductGridSkeleton";
import { IProduct } from "@/models/IProduct";
import Products from "@/components/Products";

export interface IQuery {
  field: keyof IProduct;
  value: number | string;
}

const Catalog: React.FC = () => {
  const [query, setQuery] = React.useState<IQuery>();
  const { data: ids, status } = useFetchIds(query);

  const handleFilterSubmit = React.useCallback((query: IQuery) => {
    setQuery(query);
  }, []);

  const handleResetFilter = React.useCallback(() => {
    setQuery(undefined);
  }, []);

  return (
    <>
      <Filter onSubmit={handleFilterSubmit} onReset={handleResetFilter} />
      {status === "success" ? <Products ids={ids} /> : <ProductGridSkeleton />}
    </>
  );
};

export default Catalog;
