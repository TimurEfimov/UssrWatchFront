import React from "react";
import { Link } from "react-router-dom";

export const NewReleases: React.FC = () => {
  return (
    <div className="container py-30">
      <div className="background bg-[url(/src/assets/backgrounds/background-2.jpg)]">
        <div className="bg-black/60 flex justify-center flex-col h-[600px] gap-3 p-10 ">
          <h1 className="text-4xl font-bold text-white">
            Советские новинки — как встреча со старым другом
          </h1>
          <p className="text-xl text-gray-200 mb-2 max-w-3xl">
            Эти часы когда-то украшали руки ваших родителей. Теперь они могут
            стать частью вашей истории. В коллекции — редкие модели 60–80-х
            годов в идеальном состоянии.
          </p>
          <Link to="/catalog" className="button">
            К новинкам →
          </Link>
        </div>
      </div>
    </div>
  );
};
