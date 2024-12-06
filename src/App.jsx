import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./common/pages/Accueil";
import ListPokemon from "./pokemon/pages/ListPokemon";
import ListType from "./pokemon/pages/ListType";
import RandomPokemon from "./pokemon/pages/RandomPokemon";
import SearchResultPage from "./pokemon/pages/SearchResultPage";
import FightPage from "./pokemon/pages/FightPage";
import ShowPokemon from "./pokemon/pages/ShowPokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/pokemon" element={<ListPokemon />} />
          <Route path="/type" element={<ListType />} />
          <Route path="/random-pokemon" element={<RandomPokemon />} />
          <Route path="/search-res" element={<SearchResultPage />} />
          <Route path="/fight" element={<FightPage />} />
          <Route path="/pokemon/:id" element={<ShowPokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
