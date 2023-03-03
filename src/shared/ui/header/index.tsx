import "./index.scss";
import logo from "static/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 flex justify-center border-b">
      <img src={logo} alt="logo" />

      <section className="flex items-center children:px-2 children:text-center mx-auto children:h-full children:flex children:children:my-auto">
        <Link to="/"><span>Home</span></Link>
        <Link to="/shop"><span>Shop</span></Link>
        <Link to="/pages"><span>Pages</span></Link>
      </section>

      <div className="flex">
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
