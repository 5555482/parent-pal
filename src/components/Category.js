import React from "react";
import {
  GiShoppingCart,
  GiBabyBottle,
  GiMoon,
  GiCuckooClock,
  GiMedicines,
  GiPersonInBed,
  GiKidSlide
} from "react-icons/gi";
import { IoHomeOutline, IoCarOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="flex flex-row justify-center my-8 max-[640px]:my-4 mx-0">
      <NavLink
        className="shrink-0 flex flex-col justify-center items-center rounded-full mr-8 max-[640px]:mr-1 w-24 h-24 bg-teal-500 hover:bg-teal-600 [&.active]:bg-teal-600 cursor-pointer scale-75"
        to={"/place/shop"}
      >
        <GiShoppingCart className="text-white text-2xl" />
        <h4 className="text-white text-base">Shop</h4>
      </NavLink>
      <NavLink
        className="shrink-0 flex flex-col justify-center items-center rounded-full mr-8 max-[640px]:mr-1 w-24 h-24 bg-orange-400 hover:bg-orange-500 [&.active]:bg-orange-500 cursor-pointer scale-75"
        to={"/place/doctor"}
      >
        <GiMedicines className="text-white text-2xl" />
        <h4 className="text-white text-base">Doctor</h4>
      </NavLink>
      <NavLink
        className="shrink-0 flex flex-col justify-center items-center rounded-full mr-8 max-[640px]:mr-1 w-24 h-24 bg-red-400 hover:bg-red-500 [&.active]:bg-red-500 cursor-pointer scale-75"
        to={"/place/home"}
      >
        <IoHomeOutline className="text-white text-2xl" />
        <h4 className="text-white text-base">Home</h4>
      </NavLink>
      <NavLink
        className="shrink-0 flex flex-col justify-center items-center rounded-full mr-8 max-[640px]:mr-1 w-24 h-24 bg-amber-300 hover:bg-amber-400 [&.active]:bg-amber-400 cursor-pointer scale-75"
        to={"/place/carpark"}
      >
        <IoCarOutline className="text-white text-2xl" />
        <h4 className="text-white text-base">Car Park</h4>
      </NavLink>
    </div>
  );
}

export default Category;
