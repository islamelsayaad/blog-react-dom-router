import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="title">
        <Link to="/">Blogs</Link>
      </span>
      <ul>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/create">Post Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
