import { useEffect, useState } from "react";
import PokemonCard from "../../pokemon/components/PokemonCard";

const RandomTeam = () => {
  const [randomTeam, setRandomTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandomTeam(data);
        setIsLoading(false);
      });
  }, []);

  console.log(randomTeam);

  if (isLoading) {
    return <p>en cours de chargement</p>;
  }

  return (
    <>
      {randomTeam.map((team) => {
        return <PokemonCard key={team.id} pokemon={team} />;
      })}
    </>
  );
};

export default RandomTeam;
