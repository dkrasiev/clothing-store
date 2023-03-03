import "./index.scss";
import logo from "static/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 flex justify-center border-b">
      <img src={logo} alt="logo" />

      <div className="flex items-center mx-auto children:px-2">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/pages">Pages</Link>
      </div>

      <div className="children:px-2 flex">
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
