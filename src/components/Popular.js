import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { MdOutlineArrowRight } from "react-icons/md";
import { tipsData } from "../data";

function Popular() {
  // const [popular, setPopular] = useState([]);

  // useEffect(() => {
  //   getPopular();
  // }, []);

  // const getPopular = async () => {
  //   const check = localStorage.getItem("popular");
  //   if (check) {
  //     setPopular(JSON.parse(check));
  //   } else {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
  //     );
  //     const data = await api.json();
  //     localStorage.setItem("popular", JSON.stringify(data.recipes));
  //     setPopular(data.recipes);
  //   }
  // };
  return (
    <div className="m-2">
      <h3 className="my-4">Popular Picks</h3>

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
          .filter(recipe => recipe.popularTip)
          .map(recipe => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
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
                  </div>
                </Link>
              </SplideSlide>
            );
          })}
      </Splide>
    </div>
  );
}

export default Popular;
