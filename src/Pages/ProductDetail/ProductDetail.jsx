import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Card from "../../Components/Products/Card";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {
  const [product, setproduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);


  return <LayOut>{loading ? <Loader /> : (<Card product={product} 
    flex ={true}
    renderDisc ={true}
    renderAdd={true}
  />)}</LayOut>;
};

export default ProductDetail;
