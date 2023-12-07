import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { tipsData } from "../data";

function Recipe() {
  let params = useParams();
  const [activeTab, setActiveTab] = useState("steps");

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {tipsData
        .filter(recipe => recipe.id == params.id)
        .map(recipe => {
          return (
            <div key={recipe.id}>
              <div className="relative p-4 w-full max-w-full max-h-full max-[640px]:p-1">
                {/* <div className="relative bg-white rounded-lg shadow "> */}
                {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t "> */}
                <img
                  className="h-auto max-w-xs rounded-lg mx-0 float-left"
                  src={recipe.image}
                  alt=""
                />
                {/* </div> */}
                <h3 className="p-4 text-xl font-semibold text-gray-900 max-[640px]:p-1 ">
                  {recipe.title}
                </h3>
                <div className="p-4 md:p-5 space-y-4 max-[640px]:p-1">
                  {activeTab === "summary" && (
                    <div>
                      <p
                        className="text-base leading-relaxed text-gray-500 "
                        dangerouslySetInnerHTML={{ __html: recipe.summary }}
                      ></p>
                    </div>
                  )}
                  {activeTab === "steps" && (
                    <ul>
                      {recipe.steps.map(i => (
                        <li className="space-y-2 text-gray-600 " key={i}>
                          <div className="mb-4">{i}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* </div> */}
                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                    <Button
                      success
                      rounded
                      className={activeTab === "steps" ? "active" : ""}
                      onClick={() => setActiveTab("steps")}
                    >
                      Steps
                    </Button>
                    <div className="ml-4">
                      <Button
                        primary
                        rounded
                        className={activeTab === "steps" ? "active" : ""}
                        onClick={() => setActiveTab("summary")}
                      >
                        Situation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </motion.div>
  );
}

export default Recipe;
