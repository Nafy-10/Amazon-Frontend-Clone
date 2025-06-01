import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/currencyFormat";
import classes from "./product.module.css";
import {Link} from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";


const Card = ({ product, flex, renderDisc, renderAdd }) => { // Destructure product from props
    const { image, title, id, rating, price, description } = product; // Access properties from product

const[state, dispatch] =useContext(DataContext)

const addToCart =() =>{
    dispatch ({
        type: Type.ADD_TO_BASKET,
        item:{
            image, title, id, rating, price, description
        }
    })
}


    return (
        <div className={`${classes.card_container} ${flex?classes.product_flexed : ''}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <div>
                <p>{title}</p>
                {renderDisc && <div style={{maxWidth:"600px"}}>{description}</div>}
                <div className={classes.rating}>
                    <Rating value={rating?.rate} precision={0.1} />
                    <small>{rating?.count}</small>
                </div>
                <div>
                    <CurrencyFormat amount={price} />
                </div>
                {
                    renderAdd && <button className={classes.button} onClick={addToCart}>
                    Add to Cart</button>
                }
                
            </div>
        </div>
    );
};

export default Card;

