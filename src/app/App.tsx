import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { useAppDispatch } from "../redux/store";
import { fetchWatches } from "../redux/watches/api";
import { fetchFilters } from "../redux/filters/api";

import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/home/Home";
import { Watches } from "../pages/watches/Watches";
import { InfoWatch } from "../pages/infoWatch/InfoWatch";

export const App: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const sortBy = "id";

  React.useEffect(() => {
    dispatch(fetchWatches({ sortBy }));
    dispatch(fetchFilters());
  }, [dispatch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/watch/:id" element={<InfoWatch />} />
        </Route>
      </Routes>
    </div>
  );
};
