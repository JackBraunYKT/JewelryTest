import clsx from "clsx";

interface Props {
  page: number | string;
  onPageClick?: () => void;
  isActive: boolean;
  position?: "first" | "last" | "middle" | "single";
}

export default function PaginationNumber({
  page,
  onPageClick,
  isActive,
  position,
}: Props) {
  const className = clsx(
    "flex w-10 h-10 items-center justify-center text-sm border",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-blue-600 border-blue-600 text-white": isActive,
      "bg-white hover:bg-gray-100": !isActive && position !== "middle",
      "text-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <button className={className} onClick={onPageClick}>
      {page}
    </button>
  );
}
