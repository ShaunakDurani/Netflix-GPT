import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      {/*
      - Main movie container
        - Video background
        - Title , description
        - some buttons

      - Secodary container
        - movieList * n
          - movie cards * n
      */}
    </div>
  );
};

export default Browse;
