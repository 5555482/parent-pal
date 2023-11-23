import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

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
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div class="relative p-4 w-full max-w-full max-h-full">
          <div class="relative bg-white rounded-lg shadow ">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <img
                className="h-auto max-w-xs rounded-lg mx-0"
                src={details.image}
                alt=""
              />
            </div>
            <h3 class="p-4 text-xl font-semibold text-gray-900 ">
              {details.title}
            </h3>
            <div class="p-4 md:p-5 space-y-4">
              {activeTab === "instructions" && (
                <div>
                  <p
                    className="text-base leading-relaxed text-gray-500 "
                    dangerouslySetInnerHTML={{ __html: details.summary }}
                  ></p>
                  <p
                    className="text-base leading-relaxed text-gray-500 "
                    dangerouslySetInnerHTML={{ __html: details.instructions }}
                  ></p>
                </div>
              )}
              {activeTab === "ingredience" && (
                <ul>
                  {details.extendedIngredients.map(i => (
                    <li
                      className="text-base leading-relaxed text-gray-500 0"
                      key={i.id}
                    >
                      {i.original}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
              <Button
                success
                rounded
                className={activeTab === "ingredience" ? "active" : ""}
                onClick={() => setActiveTab("ingredience")}
              >
                Ingredience
              </Button>
              <div className="ml-4">
                <Button
                  primary
                  rounded
                  className={activeTab === "instructions" ? "active" : ""}
                  onClick={() => setActiveTab("instructions")}
                >
                  Instruction
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Recipe;
