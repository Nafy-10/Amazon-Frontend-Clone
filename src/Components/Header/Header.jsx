import React, { useContext } from "react";
import Classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./Lowerheader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  // console.log(user)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={Classes.fixed}>
      <div className={Classes.Header_container}>
        <div className={Classes.logo_container}>
          {/* logo section */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>
        </div>
        {/* Delivery */}
        <div className={Classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* search */}
        <div className={Classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          <BsSearch size={25} />
        </div>
        {/* right side link */}
        <div className={Classes.order_container}>
          <Link to="/orders" className={Classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="USA flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>
          {/* Three components */}
          <Link to={!user && "/auth"}>
            <div>
              {user? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>{" "}
                
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>

          {/* Orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          {/* Cart */}
          <Link to="/cart" className={Classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
            <strong>Cart</strong>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;
