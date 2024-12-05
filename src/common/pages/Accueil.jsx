import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionPokemon from "../components/SectionPokemon";
import SectionType from "../components/SectionType";

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
