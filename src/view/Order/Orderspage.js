import React from "react";
import BookImage from "../../images/book3001.jpg";
import Ordersidebar from "../../component/Ordersidebar";
import ArrowBreadCrumb from "../../images/breadcrumb__Arrow.png";
const Orderspage = () =>{
    return (
        <>
            <section className="bulk-orders-part clearfix pt-0">
                <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Home
                                <img src={ArrowBreadCrumb} className="ml-2" />
                                </a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <a href="">Orders</a>
                            </li>
                        </ol>
                    <div className="row">
                        <Ordersidebar />
                        <div
                            className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12"
                           
                        >
                            <div className="bulk-orders-right-box">
                                <div className="bulk-orders-right-top-box">
                                    <h3>Orders</h3>
                                    <div className="bulk-orders-search-box">
                                        <form className="search">
                                            <div className="form-group position-relative" id="from-search">
                                                <input
                                                    type="search"
                                                    className="form-control"
                                                    id="formGroupExampleInput"
                                                    placeholder="Search for your orders here"
                                                />
                                                <a href="#" className="bulk-orders-seach-img">
                                                    <i className="fa-solid fa-magnifying-glass" />
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="bulk-orders-short-list-box">
                                        <h4>Sort by</h4>
                                        <ul className="bulk-orders-short-list">
                                            <li>
                                                <a href="#">Date</a>
                                            </li>
                                            <li style={{ border: "none" }}>
                                                <a href="#">Price</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bulk-orders-my-order-wrap">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-left-wrap">
                                                <h5>OrderID : #2345678901</h5>
                                                <div className="bulk-orders-my-order-wraping-wrap d-flex justify-content-between">
                                                    <div className="bulk-orders-my-order-left-img">
                                                        <a href="#" className="bulk-oder-order-img">
                                                            <img src={BookImage} />
                                                        </a>
                                                    </div>
                                                    <div className="bulk-orders-my-order-left-content">
                                                        <h4>The Design Of Everyday Things</h4>
                                                        <h5>By Donald A Norman</h5>
                                                        <h5>Format : Hardcover</h5>
                                                        <h5>QTY : 100 Unit</h5>
                                                        <h3>
                                                            <i className="fa-solid fa-indian-rupee-sign" />
                                                            1230.00
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-right-wrap">
                                                <div className="bulk-orders-my-order-right-content">
                                                    <h4>
                                                        <i className="fa-solid fa-circle bulk-orders-my-order-dot-img" />
                                                        Delivered
                                                    </h4>
                                                    <h6>22nd Sep , 2021</h6>
                                                </div>
                                                <div className="bulk-orders-my-order-right-btn-box">
                                                    <a
                                                        href="#"
                                                        className="btn btn bulk-orders-my-order-right-btn-1"
                                                    >
                                                        Return Order
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn btn bulk-orders-my-order-right-btn-2"
                                                    >
                                                        Write a Review
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bulk-orders-my-order-wrap">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-left-wrap">
                                                <h5>OrderID : #2345678901</h5>
                                                <div className="bulk-orders-my-order-wraping-wrap d-flex justify-content-between">
                                                    <div className="bulk-orders-my-order-left-img">
                                                        <a href="#" className="bulk-oder-order-img">
                                                            <img src={BookImage} />
                                                        </a>
                                                    </div>
                                                    <div className="bulk-orders-my-order-left-content">
                                                        <h4>The Design Of Everyday Things</h4>
                                                        <h5>By Donald A Norman</h5>
                                                        <h5>Format : Hardcover</h5>
                                                        <h5>QTY : 100 Unit</h5>
                                                        <h3>
                                                            <i className="fa-solid fa-indian-rupee-sign" />
                                                            1230.00
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-right-wrap">
                                                <div className="bulk-orders-my-order-right-content">
                                                    <h4 style={{ color: "#489047" }}>
                                                        <i className="fa-solid fa-circle bulk-orders-my-order-dot-img" />
                                                        Order Dispatched
                                                    </h4>
                                                    <h6>Arriving in 10-12 days</h6>
                                                    <h6>AWB : #12345678901</h6>
                                                    <h6>Courier : Blue Dart</h6>
                                                </div>
                                                <div className="bulk-orders-my-order-right-btn-box">
                                                    <a
                                                        href="#"
                                                        className="btn btn bulk-orders-my-order-right-btn-1"
                                                    >
                                                        Cancel Order
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bulk-orders-my-order-wrap">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-left-wrap">
                                                <h5>OrderID : #2345678901</h5>
                                                <div className="bulk-orders-my-order-wraping-wrap d-flex justify-content-between">
                                                    <div className="bulk-orders-my-order-left-img">
                                                        <a href="#" className="bulk-oder-order-img">
                                                            <img src={BookImage} />
                                                        </a>
                                                    </div>
                                                    <div className="bulk-orders-my-order-left-content">
                                                        <h4>The Design Of Everyday Things</h4>
                                                        <h5>By Donald A Norman</h5>
                                                        <h5>Format : Hardcover</h5>
                                                        <h5>QTY : 100 Unit</h5>
                                                        <h3>
                                                            <i className="fa-solid fa-indian-rupee-sign" />
                                                            1230.00
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-right-wrap">
                                                <div className="bulk-orders-my-order-right-content">
                                                    <h4 style={{ color: "#A72F2F" }}>
                                                        <i className="fa-solid fa-circle bulk-orders-my-order-dot-img" />
                                                        Cancelled
                                                    </h4>
                                                    <h6>16th Sep ,2021</h6>
                                                </div>
                                                <div className="bulk-orders-my-order-right-btn-box"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bulk-orders-my-order-wrap" style={{ border: "none" }}>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-left-wrap">
                                                <h5>OrderID : #2345678901</h5>
                                                <div className="bulk-orders-my-order-wraping-wrap d-flex justify-content-between">
                                                    <div className="bulk-orders-my-order-left-img">
                                                        <a href="#" className="bulk-oder-order-img">
                                                            <img src={BookImage} />
                                                        </a>
                                                    </div>
                                                    <div className="bulk-orders-my-order-left-content">
                                                        <h4>The Design Of Everyday Things</h4>
                                                        <h5>By Donald A Norman</h5>
                                                        <h5>Format : Hardcover</h5>
                                                        <h5>QTY : 100 Unit</h5>
                                                        <h3>
                                                            <i className="fa-solid fa-indian-rupee-sign" />
                                                            1230.00
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-right-wrap">
                                                <div className="bulk-orders-my-order-right-content">
                                                    <h4>
                                                        <i className="fa-solid fa-circle bulk-orders-my-order-dot-img" />
                                                        Delivered
                                                    </h4>
                                                    <h6>16th Sep ,2021</h6>
                                                </div>
                                                <div className="bulk-orders-my-order-right-btn-box">
                                                    <a
                                                        href="#"
                                                        className="btn btn bulk-orders-my-order-right-btn-2"
                                                    >
                                                        Write a Review
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
        </>
    
    )
}

export default Orderspage;