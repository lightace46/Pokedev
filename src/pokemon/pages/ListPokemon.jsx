import { useEffect, useState } from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import PokemonCard from "../components/PokemonCard";
import { Link } from "react-router-dom";

const ListPokemon = () => {
  const [pokemons, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
  }, []);

  // Fonction pour fetch les Pokémon d'une génération
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
        <button onClick={() => fetchPokemonByGeneration(1)}>
          Génération 1
        </button>
        <button onClick={() => fetchPokemonByGeneration(2)}>
          Génération 2
        </button>
        <button onClick={() => fetchPokemonByGeneration(3)}>
          Génération 3
        </button>
        <button onClick={() => fetchPokemonByGeneration(4)}>
          Génération 4
        </button>
        <button onClick={() => fetchPokemonByGeneration(5)}>
          Génération 5
        </button>
        <button onClick={() => fetchPokemonByGeneration(6)}>
          Génération 6
        </button>
        <button onClick={() => fetchPokemonByGeneration(7)}>
          Génération 7
        </button>
        <button onClick={() => fetchPokemonByGeneration(8)}>
          Génération 8
        </button>
        <section>
          {pokemons.map((pokemon) => (
            <article key={pokemon.id}>
              <p>{pokemon.name}</p>
              <img width={"100px"} src={pokemon.image} alt={pokemon.name} />
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
