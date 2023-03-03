import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import PagesPage from "./pages";
import ShopPage from "./shop";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/pages" element={<PagesPage />} />
    </Routes>
  );
};
