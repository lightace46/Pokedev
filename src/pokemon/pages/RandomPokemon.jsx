import { useEffect, useState } from "react";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";

const RandomPokemon = () => {
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

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleClick = () => {
    fetchPokemon();
  };

  if (isLoading) {
    return <p>pokemon en chargement</p>;
  }

  return (
    <>
      <Header />
      <main>
        <h1>Random pokemon</h1>

        <article>
          <p>{randomPokemon.name}</p>
          <img
            width={"100px"}
            src={randomPokemon.image}
            alt={randomPokemon.name}
          />
        </article>
      </main>
      <button onClick={handleClick}>changer de pokemon</button>
      <Footer />
    </>
  );
};

export default RandomPokemon;
