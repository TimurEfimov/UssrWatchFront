import React from "react";
import { Obj } from "../../../redux/filters/types";

interface Props {
  category: Obj[];
  title: string;
  type?: boolean;
}

export const Category: React.FC<Props> = ({ category, title, type }) => {
  const [open, setOpen] = React.useState(false);

  const startingCategory = category.slice(0, 6);
  const displayedCategory = open ? category : startingCategory;

  return (
    <div className="space-y-2">
      <h3 className="font-bold text-lg">{title}</h3>

      <div
        className={`space-y-2 ${open ? "max-h-80 overflow-y-auto pr-2" : ""}`}
        style={{ scrollbarWidth: "thin" }}
      >
        {displayedCategory.map((item) => (
          <label
            key={item.id}
            className="flex items-center cursor-pointer group"
          >
            <input
              type={!type ? "checkbox" : "radio"}
              name={!type ? title : undefined}
              className={`appearance-none cursor-pointer h-5 w-5 border-2 border-gray-200 bg-[rgba(0,150,255,.12)] ${
                !type
                  ? "rounded-md checked:bg-[url(/src/assets/images/tick.svg)]"
                  : "rounded-2xl"
              } mr-2 transition-colors checked:bg-[#BA0000] checked:border-none  bg-no-repeat bg-center`}
            />
            <span className="inline-block first-letter:uppercase group-hover:text-red-800 transition">
              {item.name}
            </span>
          </label>
        ))}
      </div>

      {category.length > 6 && (
        <span
          onClick={() => setOpen(!open)}
          className="text-red-600 font-bold hover:text-red-700 cursor-pointer transition"
        >
          {open ? "Свернуть" : "Показать все"}
        </span>
      )}
    </div>
  );
};
