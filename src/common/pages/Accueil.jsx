import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionPokemon from "../components/SectionPokemon";
import SectionElement from "../components/SectionElement";

const Accueil = () => {
  return (
    <>
      <Header />
      <h1>Bienvenue à Pokedev</h1>
      <SectionPokemon />
      <SectionElement />
      <Footer />
    </>
  );
};

export default Accueil;
