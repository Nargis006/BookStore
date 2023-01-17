import React from "react";
import WishlistItemImage from "../../images/book3011.jpg";

const Wishlist = () => {
    const loop = [1,2,3,4,5,6,7,8,9,10];
    return (
        <>
            <div className="container-fluid">
                <section className="wishlist_page clearfix">
                    <div className="top__Categories">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4>Your wishlist</h4>
                        </div>
                        <div className="wishlist_top__para d-flex justify-content-between flex-wrap mb-5">

                            {loop.map((item) => {
                                return (
                                    <div className="categories__inner mb-5" style={{ margin: "0px 10px" }}>
                                        <div className="categories__image" style={{ margin: "auto" }}>
                                            <img
                                                src={WishlistItemImage}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="wishlist_overlay">
                                                <i className="fa-solid fa-heart" />
                                            </div>
                                        </div>
                                        <p className="name__Category">Book name</p>
                                        <div className="d-flex mb-3" style={{ justifyContent: "center" }}>
                                            <a href="#">
                                                <i className="fa-solid fa-star" />
                                                4.2
                                            </a>
                                            <p>(52)</p>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <h5 className="mr-2">
                                                <i className="fa-solid fa-indian-rupee-sign" /> 1230.00
                                            </h5>
                                            <h6 className="">
                                                <i className="fa-solid fa-indian-rupee-sign" /> 1540.00
                                            </h6>
                                        </div>
                                    </div>
                                )
                            })}



                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Wishlist;