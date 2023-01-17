import React, { useEffect } from 'react'

export default function BestSellor() {
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
        window.$('#best__Sellerslider').not(".slick-initialized").slick({
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
<div className="best__Sellers">
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="section_Title">Best sellers</h4>
        <p>
          See all{" "}
          <span>
            <img
              src="assets/images/sell__allicons.png"
              alt="Arrow Icons"
              className="img-fluid"
            />
          </span>
        </p>
      </div>
      <div className="row" id="best__Sellerrow">
        <div className="col-md-12 col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-5 col-xl-5">
                  <div className="best__Sellers_bookingimage">
                    <img
                      src="assets/images/book_card_img1.jpg"
                      alt="book Image"
                      className="img-fluid"
                    />
                    <div className="best__SellerFavicons">
                      <div className="best__SellerFavicons__Inner">
                        <i className="fa-regular fa-heart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12  col-lg-7 col-xl-7 mt-4 mt-lg-0">
                  <div className="best__Sellers_bookingtext">
                    <h4 className="book__title">Rich Dad Poor Dad</h4>
                    <span className="author__name">Robert T Kiyosaki</span>
                    <div className="d-flex align-items-center justify-content-start star__iconslist">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <span className="title__subheading">ISBN</span>
                        <h4 className="value__Subheading">1234567891012</h4>
                      </div>
                      <div className="col-md-6 col-6">
                        <span className="title__subheading">Publisher</span>
                        <h4 className="value__Subheading">Norman group</h4>
                      </div>
                      <div className="col-md-6 col-6">
                        <span className="title__subheading">No of pages</span>
                        <h4 className="value__Subheading">256</h4>
                      </div>
                      <div className="col-md-6 col-6">
                        <span className="title__subheading">Price</span>
                        <h4 className="value__Subheading d-flex align-items-center justify-content-start">
                          <i className="fa-solid fa-indian-rupee-sign" />{" "}
                          <span>650.50</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <span className="description__Bestseller">Description</span>
                  <p className="para__Bestseller">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    eleifend suspendisse urna consequat nunc mattis ac, orci
                    scelerisque. Rhoncus pharetra vitae tincidunt consequat,
                    adipiscing id vitae. Iaculis nec, fermentum fringilla eu,
                    sed elementum vitae.
                  </p>
                  <div className="d-flex align-items-center justify-content-start mt-4">
                    <button className="btn view__moredetails mr-4">
                      View more details
                    </button>
                    <button className="btn buy__Now">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-5 offset-xl-1">
          <div className="slick-slider" id="best__Sellerslider">
            <div className="element">
              <div className="row">
                {loop.map((item) =>{
                  return(
                    <div className="col-12 col-sm-6 col-md-4 col-lg-6 mb-2">
                    <div className="slide__BookSection">
                      <div className="card">
                        <div className="card-body">
                          <div className="slide__BookSectionImage">
                            <div className="slide__BookSectionImage_Inner">
                              <img
                                src={item.image}
                                alt="Book Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="slide__Booksectionfav__icons">
                              <div className="slide__Booksectionfav__icons_Inner">
                                <i className="fa-regular fa-heart" />
                              </div>
                            </div>
                            <div className="slide__BookSectionImage_TExt">
                              <span className="left__text">2 Left</span>
                            </div>
                          </div>
                          <div className="slide__BookSectionCaption">
                            <h5 className="book__Name">Book name</h5>
                            <p className="author__name">Author name</p>
                            <div className="d-flex align-items-center justify-content-center rating__icons">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
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
                    <div className="col-12 col-sm-6 col-md-4 col-lg-6 mb-2">
                    <div className="slide__BookSection">
                      <div className="card">
                        <div className="card-body">
                          <div className="slide__BookSectionImage">
                            <div className="slide__BookSectionImage_Inner">
                              <img
                                src={item.image}
                                alt="Book Image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="slide__Booksectionfav__icons">
                              <div className="slide__Booksectionfav__icons_Inner">
                                <i className="fa-regular fa-heart" />
                              </div>
                            </div>
                            <div className="slide__BookSectionImage_TExt">
                              <span className="left__text">2 Left</span>
                            </div>
                          </div>
                          <div className="slide__BookSectionCaption">
                            <h5 className="book__Name">Book name</h5>
                            <p className="author__name">Author name</p>
                            <div className="d-flex align-items-center justify-content-center rating__icons">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
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
        </div>
      </div>
    </div>
</>
  )
}
