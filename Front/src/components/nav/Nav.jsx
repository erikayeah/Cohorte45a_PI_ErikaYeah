import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
  return (
    <div>
      <Link to="/home">
        <button> Home </button>
      </Link>

      <Link to="/about">
        <button> About </button>
      </Link>

      <SearchBar onSearch={onSearch} />

      <button onClick={logout}> Log out </button>
    </div>
  );
};

export default Nav;

