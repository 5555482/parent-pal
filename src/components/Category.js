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
      <NavLink to={"/cuisine/Italian"}>
        <GiShoppingCart />
        <h4>Italian</h4>
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
