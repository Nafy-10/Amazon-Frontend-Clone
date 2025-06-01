import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import classes from "./product.module.css"
import Loader from "../../Components/Loader/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
    {
      loading ? <Loader /> :(<section className={classes.product_container}>
      {
      products?.map((singleProduct) => {
        // console.log(products);
        return <Card renderAdd={true} product={singleProduct} key={singleProduct.id} />
      })
      }
    </section>)
    }
    
    </>
  );
};

export default Products;
