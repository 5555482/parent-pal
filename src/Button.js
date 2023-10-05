import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return <button>{children}</button>;
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
