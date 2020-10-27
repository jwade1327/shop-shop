import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import store from "../utils/store";

const Home = () => {
  
  return (
    <div className="container">
      {console.log( "This is the store", store.getState())}
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
