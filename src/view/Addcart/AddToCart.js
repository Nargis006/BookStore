import React from "react";

// import AddToCartSlider from "../component/AddToCartSlider";
import BookCartImage from "../../images/book3010.jpg";
import ArrowBreadCrumb from "../../images/breadcrumb__Arrow.png";

const AddToCart = () => {
    
    
    return (
        <>
            <div className="container-fluid">
                <section className="cart__page_main clearfix pt-0">
                    <div className="cart__page_top">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Search
                                    <img src={ArrowBreadCrumb} className="ml-2" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">The Design Of Everyday Things
                                    <img src={ArrowBreadCrumb} className="ml-2" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    <a href="">Cart</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                            <div className="design_____card d-flex mb-4">
                                <div className="design_____card_img">
                                    <img
                                        src={BookCartImage}
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="design_____card_text pr-3 pl-3">
                                    <div className="des_card_text_left">
                                        <div className="head__amount d-flex">
                                            <h2>
                                                The Design Of Everyday
                                                <br /> Things
                                            </h2>
                                            <div className="amount__text d-flex">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                <h6>1230.00</h6>
                                            </div>
                                        </div>
                                        <p>By Donald A Norman</p>
                                        <p>
                                            Format : <strong>Hardcover</strong>
                                        </p>
                                        <div className="qty__btn d-flex">
                                            <div className="d-flex  align-items-center">
                                                <p>QTY</p>
                                                <select className="any_select">
                                                    <option selected="">1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={3}>4</option>
                                                    <option value={3}>5</option>
                                                    <option value={3}>6</option>
                                                    <option value={3}>7</option>
                                                    <option value={3}>8</option>
                                                    <option value={3}>9</option>
                                                    <option value={3}>10</option>
                                                </select>
                                            </div>
                                            <div className="remove__btn">
                                                <div className="d-flex">
                                                    <i className="fa-solid fa-trash-can" />
                                                    <p>Remove</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="design_____card d-flex mb-4">
                                <div className="design_____card_img">
                                    <img
                                        src={BookCartImage}
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="design_____card_text pr-3 pl-3">
                                    <div className="des_card_text_left">
                                        <div className="head__amount d-flex">
                                            <h2>
                                                The Design Of Everyday
                                                <br /> Things
                                            </h2>
                                            <div className="amount__text d-flex">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                <h6>1230.00</h6>
                                            </div>
                                        </div>
                                        <p>By Donald A Norman</p>
                                        <p>
                                            Format : <strong>Hardcover</strong>
                                        </p>
                                        <div className="qty__btn d-flex">
                                            <div className="d-flex align-items-center">
                                                <p>QTY</p>
                                                <select className="any_select">
                                                    <option selected="">1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={3}>4</option>
                                                    <option value={3}>5</option>
                                                    <option value={3}>6</option>
                                                    <option value={3}>7</option>
                                                    <option value={3}>8</option>
                                                    <option value={3}>9</option>
                                                    <option value={3}>10</option>
                                                </select>
                                            </div>
                                            <div className="remove__btn">
                                                <div className="d-flex">
                                                    <i className="fa-solid fa-trash-can" />
                                                    <p>Remove</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                            <div className="des_card_text_right mb-4">
                                <h2>Offers</h2>
                                <div className="pick_offer_btn mb-5">
                                    <a href="#">Pick an offer</a>
                                </div>
                                <div className="price_chat">
                                    <h2>Price breakup</h2>
                                    <div className="price_chat_list d-flex mb-4">
                                        <h6>Book Price (2)</h6>
                                        <div className="d-flex align-items-center">
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            <p>1867.00</p>
                                        </div>
                                    </div>
                                    <div className="price_chat_list d-flex mb-4">
                                        <h6>Discount</h6>
                                        <div className="d-flex align-items-center">
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            <p>240.00</p>
                                        </div>
                                    </div>
                                    <div className="price_chat_list d-flex mb-4">
                                        <h6>Delivery Charges</h6>
                                        <div className="d-flex align-items-center">
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            <p>350.00</p>
                                        </div>
                                    </div>
                                    <div className="price_chat_underline mb-3" />
                                    <div className="price_chat_list d-flex mb-5">
                                        <h4>Total</h4>
                                        <div className="d-flex">
                                            <i
                                                className="fa-solid fa-indian-rupee-sign"
                                                style={{ fontSize: 24 }}
                                            />
                                            <h5>2500.00</h5>
                                        </div>
                                    </div>
                                    <div className="proc_check_btn">
                                        <a href="#">Proceed to checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------slider part------------*/}
                <section className="search__slider_part clearfix">
                    <div className="top__Categories">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4>People also bought</h4>
                        </div>
                        <div className="container">
                            <div id="top__supported">

                               
                                {/* <AddToCartSlider />
                          

                            
                                <div className="categories__inner">
                                    <div className="categories__image">
                                        <img
                                            src="assets/images/book3013.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="name__Category">Book name</p>
                                    <div className="d-flex mb-3" style={{ justifyContent: "center" }}>
                                        <a href="#">
                                            <i className="fa-solid fa-star" />
                                            4.2
                                        </a>
                                        <p>(52)</p>
                                    </div>
                                    <div className="d-flex mb-2 justify-content-between">
                                        <h5>
                                            <i className="fa-solid fa-indian-rupee-sign" /> 1230.00
                                        </h5>
                                        <h6>
                                            <i className="fa-solid fa-indian-rupee-sign" /> 1540.00
                                        </h6>
                                    </div>
                                </div>
                                <div className="categories__inner">
                                    <div className="categories__image">
                                        <img
                                            src="assets/images/book3012.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="name__Category">Book name</p>
                                    <div className="d-flex mb-3" style={{ justifyContent: "center" }}>
                                        <a href="#">
                                            <i className="fa-solid fa-star" />
                                            4.2
                                        </a>
                                        <p>(52)</p>
                                    </div>
                                    <div className="d-flex mb-2 justify-content-between">
                                        <h5>
                                            <i className="fa-solid fa-indian-rupee-sign" /> 1230.00
                                        </h5>
                                        <h6>
                                            <i className="fa-solid fa-indian-rupee-sign" /> 1540.00
                                        </h6>
                                    </div>
                                </div>
                                <div className="categories__inner">
                                    <div className="categories__image">
                                        <img
                                            src="assets/images/book3011.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="name__Category">Book name</p>
                                    <div className="d-flex mb-3" style={{ justifyContent: "center" }}>
                                        <a href="#">
                                            <i className="fa-solid fa-star" />
                                            4.2
                                        </a>
                                        <p>(52)</p>
                                    </div>
                                    <div className="d-flex mb-2 justify-content-between">
                                        <h5>
                                            <i className="fa-solid fa-indian-rupee-sign" /> 1230.00
                                        </h5>
                                        <h6>
                                            <i className="fa-solid fa-indian-rupee-sign" /> 1540.00
                                        </h6>
                                    </div>
                                </div>
                                <div className="categories__inner">
                                    <div className="categories__image">
                                        <img
                                            src="assets/images/book3010.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="name__Category">Book name</p>
                                    <div className="d-flex mb-3" style={{ justifyContent: "center" }}>
                                        <a href="#">
                                            <i className="fa-solid fa-star" />
                                            4.2
                                        </a>
                                        <p>(52)</p>
                                    </div>
                                    <div className="d-flex mb-2 justify-content-between">
                                        <h5>
                                            <i className="fa-solid fa-indian-rupee-sign" /> 1230.00
                                        </h5>
                                        <h6>
                                            <i className="fa-solid fa-indian-rupee-sign" /> 1540.00
                                        </h6>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default AddToCart;