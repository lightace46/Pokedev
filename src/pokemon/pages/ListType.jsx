import { useEffect, useState } from "react";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer";
import TypeCard from "../components/TypeCard";

const ListType = () => {
  const [types, setType] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setType(data);
        setIsLoading(false);
      });
  }, []);

  console.log(types);

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
        {types.map((type) => {
          return <TypeCard key={type.id} type={type} />;
        })}
      </main>

      <Footer />
    </>
  );
};

export default ListType;
