import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionPokemon from "../components/SectionPokemon";
import SectionType from "../components/SectionType";
import RandomType from "../hooks/RandomType";
import RandomTeam from "../hooks/RandomTeam";

const Accueil = () => {
  return (
    <>
      <Header />
      <h1>Bienvenue à Pokedev</h1>
      <SectionPokemon />
      <SectionType />
      <Footer />
    </>
  );
};

export default Accueil;
