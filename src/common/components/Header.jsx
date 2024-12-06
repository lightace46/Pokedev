import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const query = event.target.query.value;
    navigate("/SearchResultPage?query=" + query);
  };

  return (
    <header>
      <nav>
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
            <Link to={"/random-pokemon"}>random pokemmon</Link>
          </li>
          <li>
            <Link to={"/search-res"}>recherche pokemon</Link>
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
