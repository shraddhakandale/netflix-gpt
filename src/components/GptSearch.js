import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptSuggestions from "./GptSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute -z-10 inset-0">
        <img className="w-full h-full object-cover" src={BG_IMG_URL} alt="logo" />
      </div>
      <div className="py-32 px-14 min-h-screen flex justify-center flex-col bg-black opacity-80 gap-8">
        <GptSearchbar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
