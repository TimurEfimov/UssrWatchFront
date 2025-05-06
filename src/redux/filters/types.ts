import { Status } from "../../types/status";

export type Obj = {
  id: number;
  name: string;
};

export type Filters = {
  all_count_watch: number;
  all_count_mechanism: number;
  factory: Obj[];
  brand: Obj[];
  case_material: Obj[];
  function: Obj[];
  mechanism_type: Obj[];
  gender: Obj[];
};

export type FiltersSliceState = {
  filters: Filters;
  status: Status;
};
