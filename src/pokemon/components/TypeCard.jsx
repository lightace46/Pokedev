import { Link } from "react-router-dom";

const TypeCard = ({ type }) => {
  return (
    <article>
      <p>{type.name}</p>
      <img width={"100px"} src={type.image} alt={type.name} />
      <br />
      <Link to={"/type/" + type.id}>Voir le types</Link>
    </article>
  );
};

export default TypeCard;
