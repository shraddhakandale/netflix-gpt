import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";


const GptSearchbar = () => {
  const chosenLang = useSelector(store => store.lang.lang)
  console.log(chosenLang);
  return (
    <div className="w-1/2 m-auto bg-black opacity-80">
      <form className="grid grid-cols-12 gap-4">
        <input
          type="text"
          className="border p-2 rounded-lg col-span-10"
          placeholder={lang[chosenLang].gptSearchPlaceholder}
        />

        <button className="bg-red-800 text-white py-2 px-4 rounded-lg col-span-2">
            {lang[chosenLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
