import React from "react";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";

function App() {
  return (
    <>
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For U" data={productDataTwo} />
      <Footer />
    </>
  );
}

export default App;
