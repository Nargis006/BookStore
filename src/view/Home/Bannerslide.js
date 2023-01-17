import React, { useEffect } from 'react'

export default function Bannerslide() {
    const loop =[1,2,3,4]
    useEffect(() => {
        Slider()
    }, [])
    const Slider = () => {
        window.$('#banner__Slider').not(".slick-initialized").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    return (
        <>
            <div className="banner__Section">
                <div className="slick-slider" id="banner__Slider">
                    {loop.map((item)=>{
                        return(
                            <div className="banner__Image">
                            <img
                                src="assets/images/slider_image6.jpg"
                                alt="banner image"
                                className="img-fluid"
                            />
                   
                        </div>
                        )
                    }

                    )}
                 
                 
                </div>
            </div>
        </>
    )
}
