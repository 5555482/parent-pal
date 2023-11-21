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
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-slate-700 hover:bg-orange-500 [&.active]:bg-orange-400 cursor-pointer scale-75"
        to={"/cuisine/Italian"}
      >
        <GiShoppingCart className="text-white text-xl" />
        <h4 className="text-white text-base">Italian</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-slate-700 hover:bg-orange-500 [&.active]:bg-orange-400 cursor-pointer scale-75"
        to={"/cuisine/American"}
      >
        <GiBabyBottle className="text-white text-xl" />
        <h4 className="text-white text-base">American</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-slate-700 hover:bg-orange-500 [&.active]:bg-orange-400 cursor-pointer scale-75"
        to={"/cuisine/Thai"}
      >
        <GiMoon className="text-white text-xl" />
        <h4 className="text-white text-base">Thai</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-slate-700 hover:bg-orange-500 [&.active]:bg-orange-400 cursor-pointer scale-75"
        to={"/cuisine/Chinese"}
      >
        <GiCuckooClock className="text-white text-xl" />
        <h4 className="text-white text-base">Chinese</h4>
      </NavLink>
    </div>
  );
}

export default Category;
