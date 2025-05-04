import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "/src/assets/backgrounds/background-3.jpg";

export const Trending: React.FC = () => {
  return (
    <div className="parallax-container h-[758px]">
      <div
        className="parallax-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="bg-black/60 flex justify-center items-center flex-col h-full gap-3 relative z-10">
        <h1 className="text-4xl font-bold text-white">
          Иконы советского часового искусства
        </h1>
        <p className="text-xl text-gray-200 mb-2">
          Безупречный ход, узнаваемый дизайн. Часы, которые остаются актуальными
          десятилетиями.
        </p>
        <Link to="/catalog" className="button">
          К популярным
        </Link>
      </div>
    </div>
  );
};
