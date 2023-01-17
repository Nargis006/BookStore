import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/view/Home/index";
import Mainlayout from "../src/Layout/mainlayout";
import OrderLayout from "../src/Layout/OrderLayout";
import BulkOrders from "../src/view/Order/BulkOrders";
import Orderspage from "../src/view/Order/Orderspage";
import BookRequestOrder from "../src/view/Order/BookRequestOrder";
import BookDetails from "../src/view/Bookdetails/BookDetails";
import AddToCart from "../src/view/Addcart/AddToCart";
import Wishlist from "../src/view/Wishlist/Wishlist";
import Notification from "../src/view/Notification/Notification";
import Offers from "../src/view/Offers/Offers";
import VerifyMail from "./component/Modal/BookdetailsModal/VerifyMail";
import Payment from "../src/view/Payment/Index";
import Loader from "../src/view/loader/Loader";
import Pagenotfound from "../src/view/PageNotFound/Index";


function App() {
  return (
 <React.Fragment>
  <Router>
    <Routes>
    <Route path="/loader" element={<Loader/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/verify" element={<VerifyMail/>}/>
      <Route element={<Mainlayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/page-not-found" element={<Pagenotfound/>}/>

     </Route>
     <Route element={<OrderLayout />}>
            <Route path="/BulkOrders" element={<BulkOrders />} />
            <Route path="/Orderspage" element={<Orderspage />} />
            <Route path="/BookRequestOrder" element={<BookRequestOrder />} />
            <Route path="/BookDetails" element={<BookDetails />} />
            <Route path="/AddToCart" element={<AddToCart />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Offers" element={<Offers />} />
          </Route>
    </Routes>
  </Router>
 </React.Fragment>
  );
}

export default App;
