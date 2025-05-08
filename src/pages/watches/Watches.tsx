import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersData } from "../../redux/filters/selectors";
import { filterBackendData } from "../../redux/filters/filterData";
import { toggleFilter, setGender } from "../../redux/filters/slice";
import { FiltersSliceState } from "../../redux/filters/types";

interface FilterItem {
  id: number;
  name: string;
}

interface FilterCategory {
  id: keyof FiltersSliceState;
  title: string;
  items: FilterItem[];
}
function isFilterKey(key: string): key is keyof FiltersSliceState {
  const validKeys: Array<keyof FiltersSliceState> = [
    "factory",
    "brand",
    "case_material",
    "function",
    "mechanism_type",
    "gender",
  ];
  return validKeys.includes(key as any);
}

export const Watches: React.FC = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(getFiltersData);
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);

  const filteredFilters = filterBackendData(filters);

  if (!filteredFilters) {
    return <div>Loading Filters...</div>;
  }

  const filtersArray: FilterCategory[] = Object.entries(filteredFilters)
    .filter(([key]) => isFilterKey(key))
    .map(([key, value]) => ({
      id: key as keyof FiltersSliceState,
      ...value,
    }));

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleFilterChange = (categoryId: string, item: FilterItem) => {
    if (!isFilterKey(categoryId)) {
      console.warn(`Unknown filter key: ${categoryId}`);
      return;
    }

    if (categoryId === "gender") {
      dispatch(setGender(item.name));
    } else {
      dispatch(
        toggleFilter({
          key: categoryId,
          item: { id: item.id, name: item.name },
        })
      );
    }
  };

  return (
    <div className="mx-4">
      <div className="container pt-10">
        <div className="bg-[#FFFAFA] max-w-3xs rounded-3xl p-6 flex flex-col gap-4">
          {filtersArray.map((category) => (
            <div key={String(category.id)} className="space-y-2">
              <h3 className="font-bold text-lg">{category.title}</h3>

              {category.items && (
                <>
                  <div
                    className={`space-y-2 ${
                      openCategory === category.id
                        ? "max-h-80 overflow-y-auto pr-2"
                        : ""
                    }`}
                    style={{ scrollbarWidth: "thin" }}
                  >
                    {category.items
                      .slice(0, openCategory === category.id ? undefined : 6)
                      .map((item) => (
                        <label
                          key={item.id}
                          className="flex items-center cursor-pointer group"
                        >
                          <input
                            onChange={() =>
                              handleFilterChange(category.id, item)
                            }
                            type={
                              category.id === "gender" ? "radio" : "checkbox"
                            }
                            name={
                              category.id === "gender" ? "gender" : undefined
                            }
                            className={`appearance-none cursor-pointer h-5 w-5 border-2 border-gray-200 bg-[rgba(0,150,255,.12)] mr-2 transition-colors checked:bg-[#BA0000] checked:border-none bg-no-repeat bg-center ${
                              category.id === "gender"
                                ? "rounded-2xl checked:bg-[url(/src/assets/images/dot.svg)]"
                                : "rounded-md checked:bg-[url(/src/assets/images/tick.svg)]"
                            }`}
                          />
                          <span className="inline-block first-letter:uppercase group-hover:text-red-800 transition">
                            {item.name}
                          </span>
                        </label>
                      ))}
                  </div>

                  {category.items.length > 6 && (
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="text-red-600 font-bold hover:text-red-700 cursor-pointer transition"
                    >
                      {openCategory === category.id
                        ? "Свернуть"
                        : "Показать все"}
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
