import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { LiaChildSolid } from "react-icons/lia";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="px-0 py-10 flex flex-start items-center  max-[640px]:flex-col">
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
