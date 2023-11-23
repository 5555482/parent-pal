import React from "react";
import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className(rest.className, "flex items-center px-3 py-1.5 border", {
      "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:cyan-700 ":
        primary,
      "border-warmGray-400 bg-warmGray-400 text-white hover:bg-warmGray-500 focus:ring-4 focus:outline-none focus:warmGray-500 ":
        secondary,
      "border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:emerald-600":
        success,
      "border-orange-300 bg-orange-300 text-white hover:bg-orange-600 focus:ring-4 focus:outline-none focus:orange-600":
        warning,
      "border-red-400 bg-red-400 text-white hover:bg-red-600 focus:ring-4 focus:outline-none focus:red-600":
        danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-cyan-600": outline && primary,
      "text-warmGray-400": outline && secondary,
      "text-emerald-500": outline && success,
      "text-orange-300": outline && warning,
      "text-red-400": outline && danger
    })
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkTheType: (primary, secondary, success, warning, danger) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!warning);

    if (count > 1) {
      return new Error(
        "Only one primary, secondary, success, warning, danger can be used"
      );
    }
  }
};

export default Button;
