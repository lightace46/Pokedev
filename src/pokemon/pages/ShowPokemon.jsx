import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer";

const ShowPokemon = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
        console.log(data);
      });
  }, []);

  if (isLoading) {
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
        <article>
          <h1>{pokemon.name}</h1>
          <p>Génération {pokemon.apiGeneration}</p>
          <img width={"100px"} src={pokemon.image} alt={pokemon.name} />
          {pokemon.apiTypes.map((type) => {
            return <img width={30} src={type.image} />;
          })}

          <h2>Stats</h2>
          <p>HP : {pokemon.stats.HP}</p>
          <p>atk : {pokemon.stats.attack}</p>
          <p>def : {pokemon.stats.defense}</p>
          <p>special atk : {pokemon.stats.special_attack}</p>
          <p>special_def : {pokemon.stats.special_defense}</p>
          <p>speed : {pokemon.stats.speed}</p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default ShowPokemon;
