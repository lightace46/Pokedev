import { Link } from "react-router-dom";
import RandomType from "../hooks/RandomType";

const SectionType = () => {
  return (
    <section>
      <Link to={"/type"}>Tous les types</Link>
      <RandomType />
    </section>
  );
};

export default SectionType;
