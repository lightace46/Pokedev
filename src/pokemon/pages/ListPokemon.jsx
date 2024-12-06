import { useEffect, useState } from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header/Header";
import PokemonCard from "../components/PokemonCard";
import { Link } from "react-router-dom";
import userGetPokemon from "../hooks/useGetPokemon";

const ListPokemon = () => {
  const generations = [1, 2, 3, 4, 5, 6, 7, 8];

  const { pokemons, isLoading, fetchPokemonByGeneration } = userGetPokemon();

  if (isLoading) {
    return (
      <>
        <Header />
        {generations.map((gen) => (
          <button key={gen} onClick={() => fetchPokemonByGeneration(gen)}>
            Génération {gen}
          </button>
        ))}
        <p>Choisir une génération !</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main>
        {generations.map((gen) => (
          <button key={gen} onClick={() => fetchPokemonByGeneration(gen)}>
            Génération {gen}
          </button>
        ))}

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
