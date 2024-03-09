import { ITEMS_PER_PAGE } from "@/api/Consts";

export default function getTotalPages(itemsCount: number) {
  return Math.ceil(itemsCount / ITEMS_PER_PAGE);
}
