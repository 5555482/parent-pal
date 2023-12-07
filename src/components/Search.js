import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../components/Button";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <AiOutlineSearch />
        </div>
        <input
          onChange={e => setInput(e.target.value)}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:cyan-700 focus:border-cyan-700 "
          placeholder="Search Ideas..."
          value={input}
        />
        <Button
          primary
          rounded
          className="text-white absolute end-2.5 bottom-2.5  hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:cyan-700 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </Button>
      </div>
    </form>
  );
}

export default Search;
