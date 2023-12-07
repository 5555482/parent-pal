import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { MdOutlineArrowRight } from "react-icons/md";
import { tipsData } from "../data";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="m-2 grid grid-cols-4 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-3 max-[640px]:grid-cols-1 gap-4">
      {tipsData
        .filter(
          recipe =>
            recipe.title.includes(params.search) ||
            recipe.place.indexOf(params.search) > -1 ||
            recipe.searchWords.indexOf(params.search) > -1 ||
            recipe.summary.includes(params.search)
        )
        .map(recipe => {
          return (
            <div
              key={recipe.id}
              className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            >
              <Link to={"/parent-pal/recipe/" + recipe.id}>
                <img className="rounded-t-lg" src={recipe.image} alt="" />

                <div className="p-5">
                  <p className="mb-3 font-normal text-gray-700">
                    {recipe.title}
                  </p>
                  <Button
                    primary
                    rounded
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:cyan-700 "
                  >
                    Read more
                    <MdOutlineArrowRight />
                  </Button>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Searched;
