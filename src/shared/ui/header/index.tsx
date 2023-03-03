import "./index.scss";
import logo from "static/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-12 bg-black flex justify-center text-white">
      <img height="64px" width="64px" src={logo} alt="logo" />

      <div className="flex items-center mx-auto  ">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/pages">Pages</Link>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
