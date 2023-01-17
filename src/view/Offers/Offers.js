import React, { useEffect } from "react";
import OfferbannerImage from "../../images/offers-banner-image.png";

const Offers = () => {
    // const loop1 = [1, 2, 3,];
    const loop = [1, 2, 3, 4];
    useEffect(() => {
        Slider()
    }, [])
    const Slider = () => {
        window.$('#offers-banner-box').not(".slick-initialized").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            speed: 300,
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: true,
            responsive: [
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                }
            }
        ]
  });

    }


    return (
        <>
            {/*----------------------- offers-banner-part-start -------------------------------*/}
            <section className="offers-banner-part clearfix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="offers-banner-box" id="offers-banner-box">
                                <img
                                    src={OfferbannerImage}
                                    style={{
                                        width: "100%",
                                        height: 309,
                                        borderRadius: 12,
                                        objectFit: "cover"
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/*----------------------- offers-banner-part-end -------------------------------*/}
            {/*----------------------- biggest-discount-part-start -------------------------------*/}
            <section className="biggest-discount-part clearfix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="biggest-discount-main-content-box">
                                <p>Biggest discounts ever</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {loop.map((item,index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 pl-4 pr-4 mb-4">
                                        <div className="biggest-discount-box">
                                            <div className="discount-elipse-box">
                                                <h5>
                                                    50%
                                                    <br />
                                                    off
                                                </h5>
                                            </div>
                                            <div className="item-love-box">
                                                <i className="fa-regular fa-heart" />
                                            </div>
                                            <img
                                                src="assets/images/biggest-discount-image-1.png"
                                                className="img-fluid"
                                            />
                                            <h6>Ikigai</h6>
                                            <h5>
                                                <span className="biggest-discount-rate">
                                                    <i className="fa fa-star" aria-hidden="true" />
                                                    4.2
                                                </span>{" "}
                                                <span className="biggest-discount-txt">(52)</span>
                                            </h5>
                                            <h4>₹ 770.00</h4>
                                            <del>₹ 1540.00</del>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/*----------------------- biggest-discount-part-end -------------------------------*/}
            {/*----------------------- offer-view-book-part-start -------------------------------*/}
            <section className="offer-view-book-part">
                <div className="container-fluid">
                    <div className="row">
                        {loop.map((item) => {
                            return (
                                <>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="offer-view-book-box">
                                            <img
                                                src="assets/images/view-book-image-4.png"
                                                className="img-fluid"
                                            />
                                            <p>Upto 65% off on horror books</p>
                                            <p>
                                                <a href="#" className="btn view-book-btn">
                                                    View books
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>

    )
}
export default Offers;
