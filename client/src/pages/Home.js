import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import store from "../utils/store";
import { useSelector } from "react-redux";

const Home = () => {
  const state = store.getState();
  useSelector(state => state);
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
