import { useEffect, useState } from "react";

const useGetPokemon = (query) => {
  const [pokemon, setPokemon] = useState([]);
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
  }, [query]);

  return { pokemon, isLoading };
};

export default useGetPokemon;
