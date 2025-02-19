import "./header.css";
import logoSputyfy from "/src/assets/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSputyfy} alt="Logo Sputyfy" />
      </Link>

      <Link to="/" className="header__titulo">Sputyfy</Link>
    </div>
  );
};

export default Header;
