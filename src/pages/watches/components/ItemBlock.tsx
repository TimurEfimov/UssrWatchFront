import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  folder: string;
  brand: string;
  aliases: string[];
  mechanism: string;
  case_material: string;
}

export const ItemBlock: React.FC<Props> = ({
  id,
  folder,
  brand,
  aliases,
  mechanism,
  case_material,
}) => {
  return (
    <Link
      to={`/watch/${id}`}
      // target="_blank"
      className="bg-[#FFFAFA] w-[236px] rounded-2xl p-1 flex flex-col gap-1 transition hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        src="/watch.jpg"
        alt="watch"
        className="rounded-t-2xl w-full h-auto object-cover"
      />
      <div className="px-2 pb-2 pt-1">
        <div className="flex flex-wrap gap-1">
          {aliases.map((alias, i) => (
            <h3
              key={`alias-${i}`}
              className="font-bold text-gray-600 first-letter:uppercase bg-gray-300 rounded-lg px-2 py-1"
            >
              {alias}
            </h3>
          ))}
        </div>
        <p className="font-bold text-lg first-letter:uppercase my-1">
          {brand}, {mechanism}, {case_material}
        </p>
      </div>
    </Link>
  );
};
