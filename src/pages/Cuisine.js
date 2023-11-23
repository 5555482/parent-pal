import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { MdOutlineArrowRight } from "react-icons/md";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="m-2 grid grid-cols-4 gap-4">
        {cuisine.map(recipe => {
          return (
            <div
              key={recipe.id}
              className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            >
              <Link to={"/recipe/" + recipe.id}>
                <a href="#">
                  <img className="rounded-t-lg" src={recipe.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                      {recipe.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 ">
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
    </motion.div>
  );
}

export default Cuisine;
