import { useEffect, useState } from "react";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer";
import userGetRandomPokemon from "../hooks/useGetRandomPokemon";
import PokemonCard from "../components/PokemonCard";

const RandomPokemon = () => {
  const { randomPokemon, isLoading, fetchPokemon } = userGetRandomPokemon();

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleClick = () => {
    fetchPokemon();
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
        <h1>Random pokemon</h1>

        <PokemonCard key={randomPokemon.id} pokemon={randomPokemon} />
      </main>
      <button onClick={handleClick}>changer de pokemon</button>
      <Footer />
    </>
  );
};

export default RandomPokemon;
