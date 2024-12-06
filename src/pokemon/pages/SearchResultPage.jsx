import { Link, useSearchParams } from "react-router-dom";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer";
import PokemonCard from "../components/PokemonCard";
import { useEffect, useState } from "react";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + query)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
        setIsLoading(false);
      });
  }, [query]);

  if (isLoading) {
    return (
      <>
        <Header />
        <p>en cours de chargement</p>
        <Footer />
      </>
    );
  }

  if (!isLoading && !pokemons) {
    return (
      <>
        <Header />
        <p>pas de pokemeon</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <PokemonCard key={pokemons.id} pokemon={pokemons} />
      <Footer />
    </>
  );
};

export default SearchResultPage;
