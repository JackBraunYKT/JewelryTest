import { ITEMS_PER_PAGE } from "@/api/Consts";

export default function ProductGridSkeleton() {
  return (
    <div className="grid gap-x-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: ITEMS_PER_PAGE }, (_, index) => (
        <div
          key={index}
          className="min-w-full flex flex-col gap-2 items-center justify-between bg-white border border-solid rounded-lg px-4 py-5 mb-2 shadow-sm text-center"
        >
          <div className="h-2 w-44 rounded-full bg-gray-300 mb-0.2"></div>
          <div className="flex items-center flex-col gap-1.5 whitespace-nowrap mb-0.5">
            <div className="h-3.5 w-48 rounded bg-gray-300"></div>
            <div className="h-3.5 w-44 rounded bg-gray-300"></div>
          </div>
          <div className="h-3 w-24 rounded bg-gray-300"></div>
          <div className="h-[18px] w-[80px] rounded bg-gray-300 mt-1"></div>
        </div>
      ))}
    </div>
  );
}
