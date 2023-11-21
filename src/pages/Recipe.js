import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { CiAlignLeft, CiDumbbell, CiLineHeight } from "react-icons/ci";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={details.image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {details.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {details.title}
          </p>
          <div className="flex flex-row items-center justify-between">
            <Button
              success
              rounded
              className={activeTab === "ingredience" ? "active" : ""}
              onClick={() => setActiveTab("ingredience")}
            >
              <CiAlignLeft />
              Ingredience
            </Button>
            <Button
              success
              rounded
              className={activeTab === "instruction" ? "active" : ""}
              onClick={() => setActiveTab("instruction")}
            >
              Instruction
            </Button>
          </div>
        </div>
      </div>
      {activeTab === "instruction" && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
      )}
      {activeTab === "ingredience" && (
        <ul>
          {details.extendedIngredients.map(i => (
            <li key={i.id}>{i.original}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recipe;
