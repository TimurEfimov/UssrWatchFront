import React from "react";
import { useSelector } from "react-redux";

import { Filter } from "./components/Filter";
import { ItemBlock } from "./components/ItemBlock";
import { getWatchesData } from "../../redux/watches/selectors";

export const Watches: React.FC = () => {
  const { items } = useSelector(getWatchesData);

  return (
    <div className="mx-4">
      <div className="container pt-12 flex flex-row gap-6">
        <div className="usualFilter">
          <Filter />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <ItemBlock key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
