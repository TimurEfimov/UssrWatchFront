import React from "react";

import { Welcome } from "./components/Welcome";
import { NewReleases } from "./components/NewReleases";
import { Trending } from "./components/Trending";

export const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <NewReleases />
      <Trending />
    </>
  );
};
