import React from "react";
import { Link, Outlet } from "react-router-dom";

import logo from "../assets/images/logo.png";
import wishlist from "../assets/images/wishlist.svg";
import userLogo from "../assets/images/user.png";

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
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" className="size-12" />
              <h1 className="text-2xl font-bold">Soviet Watches</h1>
            </Link>

            <Search />

            <div className="flex items-center gap-4">
              <Link to="/userId" className="flex items-center gap-1">
                <img src={userLogo} alt="User logo" className="size-12" />
                <h2 className="text-lg font-bold">Artem</h2>
              </Link>
              <Link to="/wishlist">
                <img src={wishlist} alt="wishlist" className="size-8" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="container p-16 construction">
        {list.map((item, i) => (
          <div key={i}>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <ul>
              {item.ways.map((way) => (
                <li className="opacity-70 text-lg" key={way.path}>
                  <Link to={way.path}>{way.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </>
  );
};
