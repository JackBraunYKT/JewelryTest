import { ITEMS_PER_PAGE } from "@/api/Consts";
import React from "react";
import Pagination from "@/components/Pagination";
import ProductGrid from "@/components/Products/ProductGrid";
import getTotalPages from "@/utils/getTotalPages";
import { useFetchProducts } from "@/api/queries";
import ProductGridSkeleton from "@/components/Products/ProductGridSkeleton";

interface Props {
  ids: string[];
}

const Products: React.FC<Props> = ({ ids }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const totalPages = getTotalPages(ids.length);
  const isFirstLoading = React.useRef(true);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endItemIndex = currentPage * ITEMS_PER_PAGE;
  const currentIds: string[] = ids.slice(startItemIndex, endItemIndex);

  const { data: products, status } = useFetchProducts(currentIds);

  if (status === "success") {
    isFirstLoading.current = false;
  }

  return (
    <>
      {status === "success" ? (
        <ProductGrid products={products} />
      ) : (
        <ProductGridSkeleton />
      )}
      {isFirstLoading.current === false && (
        <Pagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Products;
