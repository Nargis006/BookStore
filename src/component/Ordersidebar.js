import React from "react";
import sidebar_Image from "../images/Ellipse 52.jpg";

const Ordersidebar = () => {

    return (
        <>
            <div
                className=" col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12"
               
            >
                <div className="bulk-orders-left-box mb-5">
                    <div className="bulk-orders-left-img-box">
                        <img
                            src={sidebar_Image}
                            alt=""
                            className="img-fluid"
                        />
                        <div className="bulk-orders-left-img-content">
                            <h3>Don Norman</h3>
                            <h6>+91 8657906473</h6>
                            <h6>abc123@gmail.com</h6>
                        </div>
                    </div>
                    <div className="bluk-orders-account-box">
                        <h5>Account Settings</h5>
                    </div>
                    <div className="bluk-orders-profile-box">
                        <h5>Profile</h5>
                    </div>
                    <div className="bluk-orders-manage-address-box">
                        <h5>Manage Adress</h5>
                    </div>
                    <div className="bluk-orders-manage-order-box">
                        <h5>manage orders</h5>
                    </div>
                    <div className="bulk-orders-drop-box pb-4">
                        <div className="dropdown">
                            <button
                                className="btn btn-bulk-orders dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                id="dropdownMenuLink"
                                aria-expanded="false"
                            >
                                Bulk Orders
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-bulk-orders dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                id="dropdownMenuLink"
                                aria-expanded="false"
                            >
                                Book Requests
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-bulk-orders dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                id="dropdownMenuLink"
                                aria-expanded="false"
                            >
                                Orders
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                                <a className="dropdown-item" href="#">
                                    Book Store
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bluk-orders-notification-box d-flex justify-content-between">
                        <h5>Notifications</h5>
                        <a href="#">
                            <i className="fa-solid fa-chevron-right" />
                        </a>
                    </div>
                    <div
                        className="bluk-orders-signout-box d-flex justify-content-between"
                        style={{ border: "none" }}
                    >
                        <h5>Logout</h5>
                        <a href="#">
                            <i className="fa-solid fa-arrow-right-from-bracket" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ordersidebar;