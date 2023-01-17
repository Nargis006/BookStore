import React, { useEffect } from 'react'

export default function TopcategoriesSlide() {
    const loop =[
        {"image":"assets/images/slider_image1.jpg",
          "heading":"Fiction"},
        {"image":"assets/images/slider_image2.jpg",
           "heading":"Horror"},
        {"image":"assets/images/slider_image3.jpg",
          "heading":"Sci - Fi"},
        {"image":"assets/images/slider_image4.jpg",
           "heading":"Comics"},
        {"image":"assets/images/slider_image5.jpg",
           "heading":"Self Help"},
           {"image":"assets/images/slider_image1.jpg",
           "heading":"Fiction"},
         {"image":"assets/images/slider_image2.jpg",
            "heading":"Horror"},
         {"image":"assets/images/slider_image3.jpg",
           "heading":"Sci - Fi"},
         {"image":"assets/images/slider_image4.jpg",
            "heading":"Comics"},
         {"image":"assets/images/slider_image5.jpg",
            "heading":"Self Help"}
      
      ]
    useEffect(() => {
        Slider()
    }, [])
    const Slider = () => {
        window.$('#top__Categories').not(".slick-initialized").slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: false,
            prevArrow: '<i class="fa-solid fa-angle-left left_ico"></i>',
            nextArrow: '<i class="fa-solid fa-angle-right right_ico"></i>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: true,
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        arrows: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    return (
        <>
            <div className="slick-slider" id="top__Categories">
                {loop.map((item) => {
                    return (
                        <div className="categories__inner">
                            <div className="categories__image">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <p className="name__Category">{item.heading}</p>
                        </div>
                    )
                }

                )}

              
            </div>
        </>
    )
}
