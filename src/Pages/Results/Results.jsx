import React, { useEffect, useState } from 'react';
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import Card from '../../Components/Products/Card';
import Loader from "../../Components/Loader/Loader";

const Results = () => {
  const [results, setResults] = useState([]); // Correctly initialize state
  const { categoryTitle } = useParams();
  const [loading, setLoading] = useState(false);
console.log(categoryTitle)

  useEffect(() => {
    setLoading(true);
    axios.get(`${productUrl}/products/category/${categoryTitle}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []); 

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category: {categoryTitle}</p>
        <hr />
        {
          loading ? <Loader /> : (
            <div className={classes.products_container}>
              {
                results.map((product) => (
                  <Card key={product.id} product={product}
                    renderDisc={false}
                    renderAdd={true}
                  />
                ))
              }
            </div>
          )
        }
      </section>
    </LayOut>
  );
}

export default Results;
