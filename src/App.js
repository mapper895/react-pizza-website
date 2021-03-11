import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData } from "./components/Products/data";

function App() {
  return (
    <>
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
    </>
  );
}

export default App;
