import { useQuery } from "@tanstack/react-query";
import { IProduct } from "@/models/IProduct";
import fetchBrands from "@/api/fetchBrands";
import fetchProducts from "@/api/fetchProducts";
import fetchIds from "@/api/fetchIds";
import { IQuery } from "@/pages/Catalog";

export function useFetchBrands() {
  return useQuery<string[], Error>({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });
}

export function useFetchProducts(ids: string[]) {
  return useQuery<IProduct[], Error>({
    queryKey: ["products", ids],
    queryFn: () => fetchProducts(ids),
    enabled: !!ids,
  });
}

export function useFetchIds(query?: IQuery) {
  return useQuery<string[], Error>({
    queryKey: ["ids", query],
    queryFn: () => (query ? fetchIds(query) : fetchIds()),
  });
}
