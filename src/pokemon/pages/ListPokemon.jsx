import { useEffect, useState } from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import PokemonCard from "../components/PokemonCard";
import useGetPokemon from "../hooks/useGetPokemon";

const ListPokemon = () => {
  const [pokemons, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
  }, []);

  if (!pokemons) {
    return (
      <>
        <Header />
        <p>En cours de chargement !</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </main>

      <Footer />
    </>
  );
};

export default ListPokemon;
