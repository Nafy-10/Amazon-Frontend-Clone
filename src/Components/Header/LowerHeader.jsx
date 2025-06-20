import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Classes from "./Header.module.css";
const LowerHeader = () => {
  return (
    <div className={Classes.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
