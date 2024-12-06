import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <article>
      <p>{pokemon.name}</p>
      <img width={"100px"} src={pokemon.image} alt={pokemon.name} />

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
  );
};

export default PokemonCard;
