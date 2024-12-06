import { useState } from "react";

const userGetRandomPokemon = (query) => {
  const [randomPokemon, setRandomPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = () => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandomPokemon(data[0]);
        setIsLoading(false);
      });
  };

  return { randomPokemon, isLoading, fetchPokemon };
};

export default userGetRandomPokemon;
