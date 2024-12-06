import { useState } from "react";

const userGetPokemon = (query) => {
  const [pokemons, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemonByGeneration = (gen) => {
    setIsLoading(true); // Active le chargement
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + gen)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setIsLoading(false); // Désactive le chargement
      });
  };

  return { pokemons, isLoading, fetchPokemonByGeneration };
};

export default userGetPokemon;
