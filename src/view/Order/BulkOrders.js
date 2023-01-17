import React, { useState } from 'react'
import bookimgnew from "../../images/book3012.jpg";
import BookImage from "../../images/book3001.jpg";
import Ordersidebar from "../../component/Ordersidebar";
import ArrowBreadCrumb from "../../images/breadcrumb__Arrow.png";

const BulkOrders = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    };
    if (modal) {
        document.body.classList.add('active-modl')
    } else {
        document.body.classList.remove('active-modl')

    }

    return (
        <>
            <section className="bulk-orders-part clearfix pt-0">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Profile
                                    <img src={ArrowBreadCrumb} className="ml-2" />
                                </a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <a href="">Bulk Orders</a>
                            </li>
                        </ol>
                    </nav>
                    <div className="row">
                        <Ordersidebar />
                        <div
                            className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12"

                        >
                            <div className="bulk-orders-right-box">
                                <div className="bulk-orders-right-top-box">
                                    <h3>Bulk Orders</h3>
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
                                                            1,23,000.00
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
                                                        className="btn btn bulk-orders-my-order-right-btn-1 mr-3"
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
                                                            1,23,000.00
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
                                                    <h6>Arriving before 22 Sep</h6>
                                                    <h6>AWB : #12345678901</h6>
                                                    <h6>Courier : Blue Dart</h6>
                                                </div>
                                                <div className="bulk-orders-my-order-right-btn-box">
                                                    <a
                                                        href="#" onClick={toggleModal}
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
                                                            1,23,000.00
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
                                                            1,23,000.00
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
                                                            1,23,000.00
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
                                                            1,23,000.00
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="bulk-orders-my-order-right-wrap">
                                                <div className="bulk-orders-my-order-right-content"></div>
                                                <div className="bulk-orders-my-order-right-btn-box">
                                                    <a
                                                        href="#"
                                                        className="btn btn bulk-orders-my-order-right-btn-1 mr-3"
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {modal && (
                <div className='modal-part CancellationModal-popup'>

                    <div className='modal-content'>
                        <div className='main_content'>
                            <div className="modal-header">
                                <h2>Cancellation</h2>
                                <button onClick={toggleModal} className="close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className='text_aria'>
                                <p>OrderID : #2345678901</p>
                                <div className='row'>
                                    <div className='col-lg-8 col-md-8 col-12'>
                                        <div className='left_cnt d-flex'>
                                            <div className='image mr-3'>
                                                <img src={bookimgnew} alt="" className="img-fluid" />
                                            </div>
                                            <div className='title'>
                                                <h5>The Design Of Everyday Things</h5>
                                                <p>By Donald A Norman</p>
                                                <p>Format  :  <strong>Hardcover</strong></p>
                                                <p>QTY  :  <strong>100 Unit</strong></p>
                                                <div className='price'>
                                                    <h3><i class="fa-solid fa-indian-rupee-sign"></i> 1,23,000.00</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-12'>
                                        <div className='Right_cnt'>
                                            <h6><i class="fa-solid fa-circle"></i> Dispatched</h6>
                                            <p>22nd Sep , 2021</p>
                                            <div className='Cancel_btn'>
                                                <button className='btn' id=''>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='Reason_cancelaltion'>
                                    <form>
                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-12'>
                                                <div className="form-group">
                                                    <label htmlFor="">Reason for cancelaltion</label>
                                                    <select className="form-control" id="" >
                                                        <option selected>Pick a reason for cancellation</option>
                                                        <option>I bought it somewhere else</option>
                                                        <option>Placed it by mistake</option>
                                                        <option>Don’t need this anymore</option>
                                                        <option>I am not interested</option>
                                                        <option>Pricing is too much high</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-12'>
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Describe your reason</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='Cancel_order_btn'>
                                    <button className='btn' id=''>Cancel this order</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    )
}

export default BulkOrders;