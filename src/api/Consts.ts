import generateAuthKey from "@/api/generateAuthKey";

export const AUTH_KEY = generateAuthKey();
export const ITEMS_PER_PAGE = 50;
export const API_URL: string = `${import.meta.env.VITE_SERVER_URL}`;
export const HEADER = {
  headers: {
    "X-Auth": AUTH_KEY,
  },
};
