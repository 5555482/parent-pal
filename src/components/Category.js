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
        className="flex flex-col justify-center items-center rounded-full mr-8 w-24 h-24 bg-slate-700 hover:bg-violet-600 active:bg-violet-700 cursor-pointer scale-75"
        to={"/cuisine/Italian"}
      >
        <GiShoppingCart className="text-white text-lg" />
        <h4 className="text-white text-base">Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <GiBabyBottle />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiMoon />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/Italian"}>
        <GiCuckooClock />
        <h4>Italian</h4>
      </NavLink>
    </div>
  );
}

export default Category;
