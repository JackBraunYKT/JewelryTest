import Actions from "@/api/Actions";
import { IProduct } from "@/models/IProduct";

export const getIdsData = (offset?: number, limit?: number) => {
  return {
    action: Actions.getIds,
    params: {
      offset,
      limit,
    },
  };
};

export const getItemsData = (ids: string[]) => {
  return {
    action: Actions.getItems,
    params: {
      ids,
    },
  };
};

export const getFieldsData = (
  field: string,
  offset?: number,
  limit?: number
) => {
  return {
    action: Actions.getFields,
    params: {
      field,
      offset,
      limit,
    },
  };
};

export const getFilterData = (key: keyof IProduct, value: string | number) => {
  return {
    action: Actions.getFilter,
    params: {
      [key]: value,
    },
  };
};
