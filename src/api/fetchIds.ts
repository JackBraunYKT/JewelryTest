import axios, { AxiosError } from "axios";
import { HEADER, API_URL } from "@/api/Consts";
import { getIdsData, getFilterData } from "@/api/DataRequests";
import getUniqueIds from "@/utils/getUniqueIds";
import { IProduct } from "@/models/IProduct";

export default async function fetchIds(query?: {
  field: keyof IProduct;
  value: string | number;
}) {
  try {
    const { data } = await axios.post(
      API_URL,
      query ? getFilterData(query.field, query.value) : getIdsData(),
      HEADER
    );
    const uniqueIds = getUniqueIds(data.result);
    return uniqueIds;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.log(
        `Failed to fetch IDs! Error Code: ${error.response.status}, Error ID: ${error.response.data}`
      );
    }
    throw new Error("Failed to fetch ids");
  }
}
