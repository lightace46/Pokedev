import { useEffect, useState } from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header/Header";
import PokemonCard from "../components/PokemonCard";
import { Link, useParams } from "react-router-dom";

const ListPokemon = () => {
  const { type } = useParams();

  const [pokemons, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokeTypes(data);
      });
  });

  // Fonction pour fetch les Pokémon d'une génération
  const fetchType = (type) => {
    setIsLoading(true); // Active le chargement
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setIsLoading(false); // Désactive le chargement
      });
  };

  useEffect(() => {
    fetchType(type);
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
        {/*pour faire les boutons */}
        {pokeTypes.map((pokeType) => {
          return (
            <button onClick={() => fetchType(pokeType.name)}>
              {pokeType.name}
            </button>
          );
        })}

        <section>
          {pokemons.map((pokemon) => (
            <article key={pokemon.id}>
              <p>{pokemon.name}</p>
              <img width={"100px"} src={pokemon.image} alt={pokemon.name} />
              <article>
                {pokemon.apiTypes.map((type) => {
                  return <img width={30} src={type.image} />;
                })}
              </article>

              <h2>Stats</h2>
              <p>HP : {pokemon.stats.HP}</p>
              <p>atk : {pokemon.stats.attack}</p>
              <p>def : {pokemon.stats.defense}</p>
              <p>special atk : {pokemon.stats.special_attack}</p>
              <p>special_def : {pokemon.stats.special_defense}</p>
              <p>speed : {pokemon.stats.speed}</p>
              <br />
              <Link to={"/pokemon/" + pokemon.id}>Voir les détails</Link>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ListPokemon;
