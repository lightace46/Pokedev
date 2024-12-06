import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../common/components/Header";
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
        <h1>{pokemon.name}</h1>
        <img width={"100px"} src={pokemon.image} alt={pokemon.name} />

        <p>Pays : {pokemon.strArea}</p>
        <p>Catégorie : {pokemon.strCategory}</p>
        <p>Instructions : </p>
        <p>{pokemon.strInstructions}</p>

        <h2>Ingrédients :</h2>
        <ul>
          {Object.keys(pokemon)
            .filter((key) => key.includes("Ingredient") && pokemon[key])
            .map((key) => {
              return (
                <li key={key}>
                  {pokemon[key]} -{" "}
                  {pokemon[key.replace("Ingredient", "Measure")]}
                </li>
              );
            })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ShowPokemon;
