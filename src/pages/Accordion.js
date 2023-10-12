import React from "react";
import Accordion from "./components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "React",
      content: "You can use react on any project"
    },
    {
      id: "2",
      label: "CSS",
      content: "You can use react on any project"
    },
    {
      id: "3",
      label: "HTML",
      content: "You can use react on any project"
    }
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
