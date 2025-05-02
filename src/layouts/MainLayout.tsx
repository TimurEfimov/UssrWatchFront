import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

export const MainLayout: React.FC = () => {
  return (
    <header className="container">
      <div className="flex justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="size-12" />
          <h1 className="text-2xl font-bold">Soviet Watches</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/userId" className="flex items-center gap-1">
            <img src="/user.jpg" alt="User logo" className="size-12" />
            <h2 className="text-lg">Artem</h2>
          </Link>
          <Link to="/wishlist">
            <img src="/wishlist.svg" alt="" className="size-10" />
          </Link>
        </div>
      </div>
    </header>
  );
};
