import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { MdOutlineArrowRight } from "react-icons/md";
import { tipsData } from "../data";

function Food() {
  // const [veggie, setVeggie] = useState([]);

  // useEffect(() => {
  //   getVeggie();
  // }, []);

  // const getVeggie = async () => {
  //   const check = localStorage.getItem("veggie");
  //   if (check) {
  //     setVeggie(JSON.parse(check));
  //   } else {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`
  //     );
  //     const data = await api.json();
  //     localStorage.setItem("veggie", JSON.stringify(data.recipes));
  //     setVeggie(data.recipes);
  //   }
  // };
  return (
    <div className="m-2">
      <h3 className="my-4">Picks by places</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem"
        }}
      >
        {tipsData
          .filter(recipe => recipe.place.length !== 0)
          .map(recipe => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                    <img className="rounded-t-lg" src={recipe.image} alt="" />

                    <div className="p-5">
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
                  </div>
                </Link>
              </SplideSlide>
            );
          })}
      </Splide>
    </div>
  );
}

export default Food;
