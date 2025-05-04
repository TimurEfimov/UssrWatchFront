import React from "react";
import { Link } from "react-router-dom";

export const Welcome: React.FC = () => {
  return (
    <div className="background">
      <div className="bg-black/60 flex justify-center items-center flex-col h-[758px] gap-3">
        <h1 className="text-4xl font-bold text-white">
          Советские часы — легенды на вашем запястье
        </h1>
        <p className="text-xl text-gray-200 mb-2">
          Механизмы, пережившие эпохи. Найдёте ли вы свои?
        </p>
        <Link
          to="/catalog"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition cursor-pointer"
        >
          В каталог
        </Link>
      </div>
    </div>
  );
};
