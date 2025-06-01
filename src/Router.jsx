import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Results/Results"
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from "./Components/ProtectedRoute/protectedRoute";


const stripePromise = loadStripe('pk_test_51RTRo3C0WbXAgkLQ0laQ6Ld4SKsENSKWbDYaAxxqtMz0W12QetETwMfKvbAIPZJB2h4J8ZQt9ezg1GNoUH16tibB001hFCCdTx');
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/payments" element={ 
            <ProtectedRoute
            msg= {"you must login to pay"}
            redirect={"/payments"}
            >
            <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
          </ProtectedRoute>
            } />
          <Route path="/orders" element={
            <ProtectedRoute
            msg= {"you must login to access your orders"}
            redirect={"/orders"}
            >
              <Elements stripe={stripePromise}></Elements>
            <Orders />
          </ProtectedRoute>
            } />
           <Route path="Category/:categoryTitle" element={< Result />} />
           <Route path="products/:productId" element={< ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
