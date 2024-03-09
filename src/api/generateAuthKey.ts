import getFormattedDate from "@/utils/getFormattedDate";
import md5 from "md5";

export default function generateAuthKey(): string {
  const currentDate: string = getFormattedDate(Date.now());
  return md5(`${import.meta.env.VITE_SERVER_PASSWORD}_${currentDate}`);
}
