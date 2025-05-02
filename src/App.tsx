import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";

export const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
