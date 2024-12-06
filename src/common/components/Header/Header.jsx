import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const query = event.target.query.value;
    navigate("/search-res?query=" + query);
  };

  return (
    <header>
      <nav>
        <img
          width={"50px"}
          src="https://i.pinimg.com/736x/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.jpg"
        />
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/pokemon"}>Pokemon</Link>
          </li>
          <li>
            <Link to={"/type"}>Type</Link>
          </li>
          <li>
            <Link to={"/random-pokemon"}>random pokemon</Link>
          </li>
          <li>
            <Link to={"/fight"}>combat</Link>
          </li>
        </ul>

        <form onSubmit={handleSubmitSearch}>
          <label>
            Recherche : <input type="search" name="query" />
          </label>

          <input type="submit" />
        </form>
      </nav>
    </header>
  );
};

export default Header;
