import React, { useState } from "react";
import { CiSquareChevDown, CiSquareChevLeft } from "react-icons/ci";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = index => {
    setExpandedIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <CiSquareChevDown /> : <CiSquareChevLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
