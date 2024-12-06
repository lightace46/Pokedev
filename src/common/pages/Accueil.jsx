import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SectionPokemon from "../components/SectionPokemon";
import SectionType from "../components/SectionType";
import RandomType from "../components/RandomType";
import RandomTeam from "../components/RandomTeam";

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
