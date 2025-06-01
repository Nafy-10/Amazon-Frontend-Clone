import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Products from "../../Components/Products/Products";
import LayOut from "../../Components/LayOut/LayOut";

const Landing = () => {
  return (
    <div>
      <LayOut>
        <Carousel />
        <Category />
        <Products />
      </LayOut>
    </div>
  );
};

export default Landing;
