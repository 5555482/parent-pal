import React, { Children } from "react";
import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {Children}
    </div>
  );
}

export default Panel;
