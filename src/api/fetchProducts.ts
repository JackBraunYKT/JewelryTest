import axios, { AxiosError } from "axios";
import { HEADER, API_URL } from "@/api/Consts";
import { getItemsData } from "@/api/DataRequests";
import getUniqueProducts from "@/utils/getUniqueProducts";
import { IProduct } from "@/models/IProduct";

const fetchProducts = async (ids: string[]): Promise<IProduct[]> => {
  try {
    const { data } = await axios.post(API_URL, getItemsData(ids), HEADER);
    const uniqueProducts = getUniqueProducts(data.result);
    return uniqueProducts;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.log(
        `Failed to fetch Products! Error Code: ${error.response.status}, Error ID: ${error.response.data}`
      );
    }
    throw new Error("Failed to fetch Products");
  }
};

export default fetchProducts;
