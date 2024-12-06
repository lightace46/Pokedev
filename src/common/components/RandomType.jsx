import { useEffect, useState } from "react";
import TypeCard from "../../pokemon/components/TypeCard";

const RandomType = () => {
  const [randomTypes, setRandomTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandomTypes(data);
        setIsLoading(false);
      });
  }, []);

  // const randomTypeId = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };
  // const type = [];

  // for (let i = 0; i < 3; i++) {
  //   type[i] = randomTypeId(0, randomTypes.length - 1);
  //   console.log(type[i]);
  // }

  // Génère 3 types aléatoires
  const randomSelections = Array.from({ length: 3 }, () => {
    const randomIndex = Math.floor(Math.random() * randomTypes.length);
    return randomTypes[randomIndex];
  });

  if (isLoading) {
    return <p>en cours de chargement</p>;
  }

  return (
    <main>
      {randomSelections.map((type) => {
        return <TypeCard key={type.id} type={type} />;
      })}
    </main>
  );
};

export default RandomType;
