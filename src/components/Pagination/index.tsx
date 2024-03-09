import generatePagination from "@/utils/generatePagination";
import PaginationNumber from "@/components/Pagination/PaginationNumber";

interface Props {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  totalPages: number;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: Props) {
  const pages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <div className="flex -space-x-px">
        {pages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;

          if (index === 0) position = "first";
          if (index === pages.length - 1) position = "last";
          if (pages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={`${page}_${index}`}
              onPageClick={
                typeof page !== "string" ? () => onPageChange(page) : undefined
              }
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
    </div>
  );
}
