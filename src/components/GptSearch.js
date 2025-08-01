import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptSuggestions from "./GptSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img className="" src={BG_IMG_URL} alt="logo" />
      </div>
      <div className="py-32 px-14 flex justify-center flex-col gap-8">
        <GptSearchbar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
