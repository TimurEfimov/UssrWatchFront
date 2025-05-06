import React from "react";
import { useSelector } from "react-redux";

import { getFiltersData } from "../../redux/filters/selectors";
import { Category } from "./components/category";

export const Watches: React.FC = () => {
  const { filters } = useSelector(getFiltersData);

  if (!filters.gender) {
    return <div>Loading Filters...</div>;
  }

  return (
    <div className="container pt-10">
      <div className="bg-[#FFFAFA] max-w-3xs rounded-3xl p-6 flex flex-col gap-4">
        <Category category={filters.factory} title="Часовой завод" />
        <Category category={filters.brand} title="Бренд" />
        <Category category={filters.case_material} title="Материал" />
        <Category category={filters.function} title="Способ завода" />
        <Category category={filters.mechanism_type} title="Тип механизма" />
        <Category category={filters.gender} title="Пол" type />
      </div>
    </div>
  );
};
