import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { LiaChildSolid } from "react-icons/lia";

function App() {
  return (
    <BrowserRouter>
      <div className="px-0 py-16 flex flex-start items-center">
        <LiaChildSolid className="text-2xl text-blue-600" />
        <Link to={"/"} className="text-lg font-fun text-blue-600">
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
