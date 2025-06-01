import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import Card from "../../Components/Products/Card";
import CurrencyFormat from "../../Components/CurrencyFormat/currencyFormat";
import { Link } from "react-router-dom";
import Classes from "./Cart.module.css"; 
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount; 
  }, 0);

  const incerement = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={Classes.container}>
        <div className={Classes.cart_container}>
          <h2>Hello, {user ? user.name : "Dear User"}</h2>{" "}
          {/* Optional: Display user name */}
          <h3>Here is Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket?.map((item, i) => (
              <section  key={i} className={Classes.cart_product}>
                <Card
                  
                  product={item}
                  renderDisc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={Classes.btn_container}>
                  <button
                    className={Classes.btn}
                    onClick={() => incerement(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={Classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket.length !== 0 && (
          <div className={Classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" aria-label="This order contains a gift" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
