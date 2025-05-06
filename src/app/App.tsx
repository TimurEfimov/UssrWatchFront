import React from "react";
import { Route, Routes } from "react-router-dom";

import { useAppDispatch } from "../redux/store";
import { fetchWatches } from "../redux/watches/api";
import { fetchFilters } from "../redux/filters/api";

import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/home/Home";
import { Watches } from "../pages/watches/Watches";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortBy = "id";

  React.useEffect(() => {
    dispatch(fetchWatches({ sortBy }));
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/watches" element={<Watches />} />
        </Route>
      </Routes>
    </div>
  );
};
