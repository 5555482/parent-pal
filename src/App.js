import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Search />
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
