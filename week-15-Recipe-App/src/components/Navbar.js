import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <h1>RecipeApp</h1>
      </NavLink>
      <ul>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/search">Search</NavLink>

        <a
          href="https://github.com/shanolhere"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </ul>
    </nav>
  );
};
export default Navbar;
