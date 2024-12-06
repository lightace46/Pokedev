import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <article>
      <p>{pokemon.name}</p>
      <img width={"100px"} src={pokemon.image} alt={pokemon.name} />
      <br />
      <Link to={"/pokemon/" + pokemon.id}>Voir les pokemon</Link>
    </article>
  );
};

export default PokemonCard;
