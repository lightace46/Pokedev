import { useEffect, useState } from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import PokemonCard from "../components/PokemonCard";
import { Link } from "react-router-dom";

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
        <h3>génération 1 : </h3>
        {pokemons.map((pokemon) => {
          return (
            <article>
              <p>{pokemon.name}</p>
              <img width={"100px"} src={pokemon.image} alt={pokemon.name} />
              <br />
              <Link to={"/pokemon/" + pokemon.id}>Voir les pokemon</Link>
            </article>
          );
        })}
      </main>

      <Footer />
    </>
  );
};

export default ListPokemon;
