import React, { useState } from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <form onSubmit={submitHandler}>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <GiArchiveResearch />
        </div>
        <input
          onChange={e => setInput(e.target.value)}
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Search Ideas..."
          value={input}
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
