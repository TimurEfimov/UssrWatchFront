import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "/src/assets/backgrounds/background-1.jpg";

export const Welcome: React.FC = () => {
  return (
    <div className="parallax-container h-[758px]">
      <div
        className="parallax-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="bg-black/60 flex justify-center items-center flex-col h-full gap-3 relative z-10">
        <h1 className="text-4xl font-bold text-white">
          Советские часы — легенды на вашем запястье
        </h1>
        <p className="text-xl text-gray-200 mb-2">
          Механизмы, пережившие эпохи. Найдёте ли вы свои?
        </p>
        <Link to="/watches" className="button">
          В каталог
        </Link>
      </div>
    </div>
  );
};
