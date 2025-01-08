import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesstions from "./GptMovieSuggesstions";
import { BG_IMAGE } from "../Utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BG_IMAGE} alt="bg-image"></img>
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
