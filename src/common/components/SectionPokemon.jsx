import { Link } from "react-router-dom";
import RandomTeam from "../hooks/RandomTeam";

const SectionPokemon = () => {
  return (
    <section>
      <Link to={"/pokemon"}>Tous les pokemons</Link>
      <RandomTeam />
    </section>
  );
};

export default SectionPokemon;
