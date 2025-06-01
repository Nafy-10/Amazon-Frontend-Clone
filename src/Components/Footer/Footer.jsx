// AmazonFooter.jsx
import React, { Component } from "react";
import classes from "./Footer.module.css";

class AmazonFooter extends Component {
  backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <footer className={classes.footer} role="contentinfo">
        <div
          className={classes.footerTop}
          onClick={this.backToTop}
          tabIndex="0"
          role="button"
          aria-label="Back to top"
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") this.backToTop();
          }}
        >
          Back to top
        </div>

        <div className={classes.footerColumns} aria-label="Amazon footer navigation">
          <div className={classes.footerColumn} aria-labelledby="footer-column-1">
            <h3 id="footer-column-1">Get to Know Us</h3>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Amazon</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Amazon Devices</a></li>
              <li><a href="#">Amazon Science</a></li>
            </ul>
          </div>

          <div className={classes.footerColumn} aria-labelledby="footer-column-2">
            <h3 id="footer-column-2">Make Money with Us</h3>
            <ul>
              <li><a href="#">Sell products on Amazon</a></li>
              <li><a href="#">Sell apps on Amazon</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Advertise Your Products</a></li>
              <li><a href="#">Self-Publish with Us</a></li>
              <li><a href="#">Host an Amazon Hub</a></li>
              <li><a href="#">› See More Make Money with Us</a></li>
            </ul>
          </div>

          <div className={classes.footerColumn} aria-labelledby="footer-column-3">
            <h3 id="footer-column-3">Amazon Payment Products</h3>
            <ul>
              <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
              <li><a href="#">Amazon.com Store Card</a></li>
              <li><a href="#">Amazon Business Card</a></li>
              <li><a href="#">Amazon Business Line of Credit</a></li>
              <li><a href="#">Shop with Points</a></li>
              <li><a href="#">Credit Card Marketplace</a></li>
              <li><a href="#">Amazon Currency Converter</a></li>
            </ul>
          </div>

          <div className={classes.footerColumn} aria-labelledby="footer-column-4">
            <h3 id="footer-column-4">Let Us Help You</h3>
            <ul>
              <li><a href="#">Amazon and COVID-19</a></li>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Your Orders</a></li>
              <li><a href="#">Shipping Rates & Policies</a></li>
              <li><a href="#">Returns & Replacements</a></li>
              <li><a href="#">Manage Your Content and Devices</a></li>
              <li><a href="#">Amazon Assistant</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>

        <div className={classes.footerBottom} role="contentinfo" aria-label="Amazon footer bottom section">
          <div className={classes.footerCountry} aria-label="Select country">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="United States flag"
            />
            <select aria-label="Select your country or region" className={classes.countrySelect}>
              <option value="us" defaultValue>United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="jp">Japan</option>
              <option value="cn">China</option>
            </select>
          </div>
          <div className={classes.footerPayments} aria-label="Footer payment methods and locale info">
            <img
              className={classes.footerLogo}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
            <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default AmazonFooter;
