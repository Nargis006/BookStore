import React, { useEffect } from 'react'

export default function Topbooks() {
  const loop =[
    {"image":"assets/images/book_card_img1.jpg"},
    {"image":"assets/images/book_card_img2.jpg"},
    {"image":"assets/images/book_card_img3.jpg"},
    {"image":"assets/images/book_card_img4.jpg"}
  
  ]
    useEffect(() => {
        Slider()
    }, [])
    const Slider = () => {
        window.$('#top__Books_Selfhelp').not(".slick-initialized").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<i class="fa-solid fa-angle-left left_ico"></i>',
            nextArrow: '<i class="fa-solid fa-angle-right right_ico"></i>',
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
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
<div className="slick-slider" id="top__Books_Selfhelp">
            <div className="element">
              <div className="row">
              {loop.map((item) =>{
                  return(
                    <div className="col-md-6 col-sm-12 col-12 mb-4">
                    <div className="self__Bookhelpinner">
                      <div className="self__Bookhelpimage">
                        <img
                          src={item.image}
                          alt=""
                          className="img-fluid book__Product_Image"
                        />
                        <div className="fav__Captionicons">
                          <div className="fav__Captionicons__Inner">
                            <i className="fa-regular fa-heart" />
                          </div>
                        </div>
                      </div>
                      <div className="self__Bookhelpimage__caption">
                        <h5 className="book__name">Book name</h5>
                        <span className="authorname">Author name</span>
                        <div className="d-flex align-items-center justify-content-start rating__icons">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <div className="price__Main">
                          <div className="row align-items-end">
                            <div className="col-md-5">
                              <span className="price__Text">Price</span>
                              <h4 className="value__Subheading d-flex align-items-center justify-content-start">
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                <span>650.50</span>
                              </h4>
                            </div>
                            <div className="col-md-7">
                              <button className="add_toCartbtn">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }

                )}
              </div>
            </div>
            <div className="element">
              <div className="row">
              {loop.map((item) =>{
                  return(
                    <div className="col-md-6 col-sm-12 col-12 mb-4">
                    <div className="self__Bookhelpinner">
                      <div className="self__Bookhelpimage">
                        <img
                          src={item.image}
                          alt=""
                          className="img-fluid book__Product_Image"
                        />
                        <div className="fav__Captionicons">
                          <div className="fav__Captionicons__Inner">
                            <i className="fa-regular fa-heart" />
                          </div>
                        </div>
                      </div>
                      <div className="self__Bookhelpimage__caption">
                        <h5 className="book__name">Book name</h5>
                        <span className="authorname">Author name</span>
                        <div className="d-flex align-items-center justify-content-start rating__icons">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <div className="price__Main">
                          <div className="row align-items-end">
                            <div className="col-md-5">
                              <span className="price__Text">Price</span>
                              <h4 className="value__Subheading d-flex align-items-center justify-content-start">
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                <span>650.50</span>
                              </h4>
                            </div>
                            <div className="col-md-7">
                              <button className="add_toCartbtn">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }

                )}
              </div>
            </div>
          </div>
</>
  )
}
