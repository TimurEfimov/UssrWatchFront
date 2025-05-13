import React from "react";
import { Link, Outlet } from "react-router-dom";

import logo from "../assets/images/logo.png";
import memo from "../assets/images/memo.svg";

import { Search } from "../components/Search";

const list = [
  {
    title: "Услуги",
    ways: [
      {
        name: "Избранные модели",
        path: "wishlist",
      },
      {
        name: "Частые вопросы",
        path: "faq",
      },
      {
        name: "Обратная связь",
        path: "tg",
      },
    ],
  },
];

export const MainLayout: React.FC = () => {
  return (
    <>
      <header className="bg-[#BA0000] py-4.5 text-[#F8F4FF]">
        <div className="mx-4">
          <div className="container">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="logo" className="size-12" />
                <h1 className="text-2xl font-bold">Ussr Watch</h1>
              </Link>

              <Search />

              <div className="flex items-center gap-4">
                <Link to="/memo">
                  <img src={memo} alt="Advices" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mx-4">
        <div className="container py-16 construction">
          {list.map((item, i) => (
            <div key={i}>
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <ul>
                {item.ways.map((way) => (
                  <li
                    className="opacity-70 text-lg hover:opacity-90 transition"
                    key={way.path}
                  >
                    <Link to={way.path}>{way.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};
