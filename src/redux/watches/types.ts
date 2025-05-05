export type Watch = {
  id: string;
  folder: string;
  start_release: number;
  end_release: number;
  gender: string;
  case_material: string;
  brand: string;
  alias: string[];
};

export type SearchWatchParams = {
  sortBy: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type WatchSliceState = {
  items: Watch[];
  status: Status;
};
