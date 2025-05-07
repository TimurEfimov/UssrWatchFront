import { Status } from "../../types/status";

export type Obj = {
  id: number;
  name: string;
};

export type Filters = {
  all_count_watch: number;
  factory: { title: string; items: Obj[] };
  brand: { title: string; items: Obj[] };
  case_material: { title: string; items: Obj[] };
  function: { title: string; items: Obj[] };
  mechanism_type: { title: string; items: Obj[] };
  gender: { title: string; items: Obj[] };
};

export type FiltersSliceState = {
  filters: Filters;
  status: Status;
  factories: Obj[];
  brands: Obj[];
  materials: Obj[];
  winding: Obj[];
  mechanisms: Obj[];
  gender: string;
};
