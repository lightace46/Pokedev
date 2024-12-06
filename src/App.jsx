import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./common/pages/Accueil";
import ListPokemon from "./pokemon/pages/ListPokemon";
import ListPokemonType from "./pokemon/pages/ListPokemonType";
import RandomPokemon from "./pokemon/pages/RandomPokemon";
import SearchResultPage from "./pokemon/pages/SearchResultPage";
import FightPage from "./pokemon/pages/FightPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/pokemon" element={<ListPokemon />} />
          <Route path="/pokemon-type" element={<ListPokemonType />} />
          <Route path="/random-pokemon" element={<RandomPokemon />} />
          <Route path="/search-res" element={<SearchResultPage />} />
          <Route path="/fight" element={<FightPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
