import "./index.scss";
import logo from "static/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 border flex justify-center items-center relative">
      <div className="flex absolute left-4 child:h-16 child:w-16">
        <img src={logo} alt="logo" />
      </div>

      <section className="mx-auto h-full flex items-stretch child:px-2 child:flex child:items-center">
        <Link to="/"><span>Home</span></Link>
        <Link to="/shop"><span>Shop</span></Link>
        <Link to="/pages"><span>Pages</span></Link>
      </section>

      <div className="flex absolute right-4 child:h-16 child:w-16">
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
