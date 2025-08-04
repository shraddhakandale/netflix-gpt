import React, { useReducer, useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchbar = () => {
  const chosenLang = useSelector((store) => store.lang.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesInTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Exmaple result: Gadar, Golmal, Koi mil gaya, Sholay, don";
    let gptMovies = [];
    try{
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
        max_tokens: 100,
        temperature: 0.7,
      });

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
    }catch(error){
      alert("Rate limit exceeded, Showing the default results?")
    }
    gptMovies = ["Andaz apna apna", "Hera pheri", "Golmal", "Phir hera pheri", "Padosan"];
    const promiseArray = gptMovies.map(movie => searchMoviesInTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="md:w-1/2 m-auto bg-black opacity-80 w-full mt-[40px]">
      <form
        className="grid md:grid-cols-12 md:gap-4 grid-cols-4 gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="border p-2 rounded-lg md:col-span-10 col-span-4"
          placeholder={lang[chosenLang].gptSearchPlaceholder}
        />

        <button
          className="bg-red-800 text-white py-2 px-4 rounded-lg md:col-span-2 col-span-2 col-start-2"
          onClick={handleGptSearchClick}
        >
          {lang[chosenLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
