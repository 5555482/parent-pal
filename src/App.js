import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FaHandsHoldingChild } from "react-icons/fa6";
import Link from "./components/Link";

function App() {
  return (
    <BrowserRouter>
      <div className="px-0 py-16 flex flex-start items-center">
        <FaHandsHoldingChild to={"/"} className="text-base" />
        <Link to={"/"} className="text-base font-serif italic ml-2">
          Parent-Pal
        </Link>
      </div>

      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
