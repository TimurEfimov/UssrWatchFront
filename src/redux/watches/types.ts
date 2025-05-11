import { Status } from "../../types/status";

export type Watch = {
  id: number;
  folder: string;
  start_release: number;
  end_release: number;
  gender: string;
  mechanism: string;
  case_material: string;
  brand: string;
  aliases: string[];
};

export type SearchWatchParams = {
  sortBy: string;
};

export type WatchSliceState = {
  items: Watch[];
  status: Status;
};
