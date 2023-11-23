import React from "react";
import {
  GiShoppingCart,
  GiBabyBottle,
  GiMoon,
  GiCuckooClock,
  GiBathtub,
  GiPersonInBed,
  GiKidSlide
} from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="flex justify-center my-8 mx-0">
      <NavLink
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-teal-500 hover:bg-teal-600 [&.active]:bg-teal-600 cursor-pointer scale-75"
        to={"/cuisine/Italian"}
      >
        <GiShoppingCart className="text-white text-xl" />
        <h4 className="text-white text-base">Italian</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-orange-400 hover:bg-orange-500 [&.active]:bg-orange-500 cursor-pointer scale-75"
        to={"/cuisine/American"}
      >
        <GiBabyBottle className="text-white text-xl" />
        <h4 className="text-white text-base">American</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-red-400 hover:bg-red-500 [&.active]:bg-red-500 cursor-pointer scale-75"
        to={"/cuisine/Thai"}
      >
        <GiMoon className="text-white text-xl" />
        <h4 className="text-white text-base">Thai</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-amber-300 hover:bg-amber-400 [&.active]:bg-amber-400 cursor-pointer scale-75"
        to={"/cuisine/Chinese"}
      >
        <GiCuckooClock className="text-white text-xl" />
        <h4 className="text-white text-base">Chinese</h4>
      </NavLink>
    </div>
  );
}

export default Category;
