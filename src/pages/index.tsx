import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import LoginPage from "./login";
import PagesPage from "./pages";
import ShopPage from "./shop";

export const Routing = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/pages" element={<PagesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
