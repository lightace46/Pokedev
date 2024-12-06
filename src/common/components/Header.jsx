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
