import { Filters } from "../../redux/filters/types";

export const filterBackendData = (
  data: any
): Omit<Filters, "all_count_watch"> => {
  const { all_count_watch, ...filteredData } = data;
  return filteredData;
};
