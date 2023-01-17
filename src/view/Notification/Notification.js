import React from "react";
import ArrowBreadCrumb from "../../images/breadcrumb__Arrow.png";
import Ordersidebar from "../../component/Ordersidebar";

const Notification = () =>{
    return (
        <>
            <div className="container-fluid">
                {/* BreadCrumb Section Start */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Profile
                            <img src={ArrowBreadCrumb} className="ml-2" />
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <a href="">Notifications</a>
                        </li>
                    </ol>
                </nav>
                {/* BreadCrumb Section End */}
                {/* Notification Listing Start */}
                <div className="notification__Listing">
                    <div className="row">
                        {/* LeftSide Start */}
                        <Ordersidebar />
                        {/* LeftSide End */}
                        {/* rightSide Start */}
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12 mb-3">
                            <div className="notification__Mainlisting">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between my-3 mb-4">
                                            <h4 className="notification__TExt">Notifications</h4>
                                            <a className="clearALl" href="#">
                                                Clear All
                                            </a>
                                        </div>
                                        <div className="card delivery_Status">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="delivery__Text">Delivery Status</h4>
                                                    <a className="delivery__Nowtext" href="#">
                                                        Now
                                                    </a>
                                                </div>
                                                <p className="des__Delivery mt-2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Duis urna, in habitant blandit vel quis amet sagittis
                                                    convallis. Amet nulla vulputate purus ac volutpat.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card delivery_Status">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="delivery__Text">Order Request</h4>
                                                    <a className="delivery__Nowtext" href="#">
                                                        1d ago
                                                    </a>
                                                </div>
                                                <p className="des__Delivery mt-2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Duis urna, in habitant blandit vel quis amet sagittis
                                                    convallis. Amet nulla vulputate purus ac volutpat.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card delivery_Status">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="delivery__Text">New Books Arrived</h4>
                                                    <a className="delivery__Nowtext" href="#">
                                                        1d ago
                                                    </a>
                                                </div>
                                                <p className="des__Delivery mt-2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Duis urna, in habitant blandit vel quis amet sagittis
                                                    convallis. Amet nulla vulputate purus ac volutpat.{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card delivery_Status">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="delivery__Text">New Books Arrived</h4>
                                                    <a className="delivery__Nowtext" href="#">
                                                        1d ago
                                                    </a>
                                                </div>
                                                <p className="des__Delivery mt-2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Duis urna, in habitant blandit vel quis amet sagittis
                                                    convallis. Amet nulla vulputate purus ac volutpat.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* rightSide End */}
                    </div>
                </div>
                {/* Notification Listing End */}
            </div>

        </>
    )

}

export default Notification;