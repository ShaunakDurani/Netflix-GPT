import React from "react";
import lang from "./languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.langconfig.lang);
  console.log(langKey);

  return (
    <div className="pt-40 flex justify-center">
      <form className="w-6/12 p-4 m-4 bg-black rounded-lg grid grid-cols-12">
        <input
          className="p-3 col-span-9 mr-3 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptPlaceholderText}
        ></input>
        <button className="p-2 bg-red-500 col-span-3 rounded-lg hover:bg-red-700">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
