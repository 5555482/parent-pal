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
    <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
      <h5 class="mb-2 text-3xl font-bold text-gray-900 ">{details.title}</h5>
      <div className="flex justify-between my-8 mx-0">
        <img
          className="mt-4 object-cover h-60  rounded-lg mx-0"
          src={details.image}
          alt=""
        />
        <div class="items-center justify-between sm:flex space-x-16 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
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
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instruction
          </Button>
          {activeTab === "instructions" && (
            <div>
              <h3
                className="mb-5 text-base text-gray-500 sm:text-lg"
                dangerouslySetInnerHTML={{ __html: details.summary }}
              ></h3>
              <h3
                className="mb-5 text-base text-gray-500 sm:text-lg"
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h3>
            </div>
          )}
          {activeTab === "ingredience" && (
            <ul>
              {details.extendedIngredients.map(i => (
                <li
                  className="mb-5 text-base text-gray-500 sm:text-lg"
                  key={i.id}
                >
                  {i.original}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
