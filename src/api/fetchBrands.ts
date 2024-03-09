import axios, { AxiosError } from "axios";
import { API_URL, HEADER } from "@/api/Consts";
import { getFieldsData } from "@/api/DataRequests";
import getUniqueBrands from "@/utils/getUniqueBrands";

export default async function fetchBrands() {
  try {
    const { data } = await axios.post(API_URL, getFieldsData("brand"), HEADER);
    const uniqueBrands = getUniqueBrands(data.result);
    return uniqueBrands;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.log(
        `Failed to fetch Brands! Error Code: ${error.response.status}, Error ID: ${error.response.data}`
      );
    }
    throw new Error("Failed to fetch brands");
  }
}
