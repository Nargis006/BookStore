import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookCartSlider from "../images/book3011.jpg";

const AddToCartSlider = () =>{
    const loop = [1,2,3,4,5,6,7];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
    return(
        <Slider {...settings}>
        {loop.map((item)=>{
            return(
                <div className="categories__inner">
                    <div className="categories__image">
                        <img
                            src={BookCartSlider}
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
                        <p>52</p>
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
            )
        })}
    </Slider>
    )
}

export default AddToCartSlider;