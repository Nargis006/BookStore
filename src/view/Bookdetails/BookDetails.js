import React, { useState } from "react";
import { useEffect } from "react";
import Review_Person from "../../images/thomas-img.jpg";
import BookImage from "../../images/book3001.jpg";
import Helpful from "../../images/helpful.png";
import Flag from "../../images/flag-as.png";
import ArrowBreadCrumb from "../../images/breadcrumb__Arrow.png";
import modalbannerimage from "../../images/New Project.png";
import signinModal_image from "../../images/dashicons_translation (1).png";
import modalbuyer from "../../images/Group 237.png";
import modaldistributer from "../../images/Group 238.png";
import buyerimg from "../../images/clarity_book-solid.png";
import bookimgnew from "../../images/book3011.jpg";
import axios from "axios";
import { useRef } from "react";
import agent from "../../app/api/agent.ts";

const BookDetails = () => {
  // const loop1 =[1,2,3]
  // useEffect(() => {
  //     Slideronme()
  // },[])
  // const Slideronme = () => {
  //     window.$('#signin_modal_Slider').not(".slick-initialized").slick({
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: true,
  //         arrows: false,
  //         responsive: [
  //             {
  //                 breakpoint: 768,
  //                 settings: {
  //                     arrows: false,
  //                     slidesToShow: 1,
  //                     slidesToScroll: 1
  //                 }
  //             },
  //             {
  //                 breakpoint: 480,
  //                 settings: {
  //                     arrows: false,
  //                     slidesToShow: 1,
  //                     slidesToScroll: 1
  //                 }
  //             }
  //         ]
  //     });
  // }
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);

  //const userId = useRef('')

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModal2 = () => {
    setModal2(!modal2);
  };
  const toggleModal3 = () => {
    setModal3(!modal3);
  };
  const toggleModal4 = () => {
    setModal4(!modal4);
  };
  const toggleModal5 = () => {
    setModal5(!modal5);
  };
  const toggleModal6 = () => {
    setModal6(!modal6);
  };

  if (modal) {
    document.body.classList.add("active-modl");
  } else {
    document.body.classList.remove("active-modl");
  }

  const loop = [1, 2, 3];
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    // let i;
    // let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("demo");
    // let captionText = document.getElementById("caption");
    // if (n > slides.length) {
    // 	slideIndex = 1
    // }
    // if (n < 1) {
    // 	slideIndex = slides.length
    // }
    // for (i = 0; i < slides.length; i++) {
    // 	slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    // 	dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
  }
  return (
    <>
      <div className="container-fluid">
        <section className="book_details_top clearfix pt-0">
          <div className="">
            <div className="book_details__name">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">
                      Search
                      <img src={ArrowBreadCrumb} className="ml-2" />
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="">Book name</a>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row align-items-end">
              <div className="col-md-4 col-12">
                <div className="book_details_slider">
                  <div className="book_details_slidbox">
                    <div className="container">
                      <div className="mySlides">
                        <img src={BookImage} alt="" className="img-fluid" />
                        <div className="book_details_slid_overlay">
                          <i className="fa-regular fa-heart" />
                        </div>
                      </div>
                      <div className="mySlides">
                        <img
                          src="assets/images/book3002.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="book_details_slid_overlay">
                          <i className="fa-regular fa-heart" />
                        </div>
                      </div>
                      <div className="mySlides">
                        <img
                          src="assets/images/book3003.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="book_details_slid_overlay">
                          <i className="fa-regular fa-heart" />
                        </div>
                      </div>
                      <a className="prev" onClick={() => plusSlides(-1)}>
                        ❮
                      </a>
                      <a className="next" onClick={() => plusSlides(1)}>
                        ❯
                      </a>
                      <div className="row justify-content-center ksjfkid mt-4">
                        <div className="column">
                          <img
                            className="demo cursor"
                            src={BookImage}
                            alt=""
                            onClick={() => currentSlide(1)}
                          />
                        </div>
                        <div className="column">
                          <img
                            className="demo cursor"
                            src={BookImage}
                            alt=""
                            onClick={() => currentSlide(2)}
                          />
                        </div>
                        <div className="column">
                          <img
                            className="demo cursor"
                            src={BookImage}
                            alt=""
                            onClick={() => currentSlide(3)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xl-6 col-12">
                <div className="book_details_maincnt">
                  <div className="maincnt__head">
                    <h2>
                      The Design Of Everyday Things{" "}
                      <a href="#">
                        <i className="fa-solid fa-share-nodes" />
                      </a>
                    </h2>
                    <p>By Donald A Norman</p>
                    <div className="maincnt_rating">
                      <span className="fa-solid fa-star checked" />
                      <span className="fa-solid fa-star checked" />
                      <span className="fa-solid fa-star checked" />
                      <span className="fa-solid fa-star checked" />
                      <span className="fa-regular fa-star" />
                      <pre> 4.2 (105 Reviews)</pre>
                    </div>
                  </div>
                  <div className="maincnt__tabs">
                    <section>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="false"
                          >
                            <h6 className="d-flex justify-content-between">
                              <span>Hardcover</span>
                              <span>
                                <i className="fa-regular fa-circle-question" />
                              </span>
                            </h6>
                            <h5>₹ 1230.00</h5>
                          </a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            <h6 className="d-flex justify-content-between">
                              <span>Paperback</span>
                              <span>
                                <i className="fa-regular fa-circle-question" />
                              </span>
                            </h6>
                            <h5>₹ 650.50</h5>
                          </a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link"
                            id="contact-tab"
                            data-toggle="tab"
                            href="#contact"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="true"
                          >
                            <h6 className="d-flex justify-content-between">
                              <span>Ebook</span>
                              <span>
                                <i className="fa-regular fa-circle-question" />
                              </span>
                            </h6>
                            <h5>₹ 550.00</h5>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade active show"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div className="pb-3">
                            <p>
                              Want the sold out version ?{" "}
                              <a href="#">Request now</a>
                            </p>
                            <p>
                              Want the book in different language ?{" "}
                              <a href="#" onClick={toggleModal6}>
                                Request for translate
                              </a>
                            </p>
                          </div>
                          <p>
                            <i
                              className="fa-solid fa-truck"
                              style={{ paddingRight: 5 }}
                            />{" "}
                            Usually ships in 2 days
                          </p>
                          <p>
                            <i
                              className="fa-solid fa-box"
                              style={{ paddingRight: 5 }}
                            />{" "}
                            Delivery between 12-15 days
                          </p>
                          <div className="maincnt_checkbtn">
                            <form>
                              <div className="maincnt_check">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Enter pincorde to check"
                                />
                                <a href="#">Check</a>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <p>
                            <i
                              className="fa-solid fa-truck"
                              style={{ paddingRight: 5 }}
                            />{" "}
                            Usually ships in 2 days
                          </p>
                          <p>
                            <i
                              className="fa-solid fa-box"
                              style={{ paddingRight: 5 }}
                            />{" "}
                            Delivery between 12-15 days
                          </p>
                          <div className="maincnt_checkbtn">
                            <form>
                              <div className="maincnt_check">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Enter pincorde to check"
                                />
                                <a href="#">Check</a>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                        >
                          <p>
                            <i
                              className="fa-solid fa-truck"
                              style={{ paddingRight: 5 }}
                            />{" "}
                            Usually ships in 2 days
                          </p>
                          <p>
                            <i
                              className="fa-solid fa-box"
                              style={{ paddingRight: 5 }}
                            />{" "}
                            Delivery between 12-15 days
                          </p>
                          <div className="maincnt_checkbtn">
                            <form>
                              <div className="maincnt_check">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Enter pincorde to check"
                                />
                                <a href="#">Check</a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="book__mainbtn d-flex">
                    <a href="#" className="white_btn">
                      Add to cart
                    </a>
                    <a href="#" className="black_btn" onClick={toggleModal3}>
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-12 p-lg-0">
                <div className="other__Sellers">
                  <h5 className="other__SellersTitle">Other sellers</h5>

                  <div className="d-flex align-items-center justify-content-between ot_Sell">
                    <div className="">
                      <h6 className="other__SellersPrice">
                        ₹ 550.00 - ₹ 1230.00
                      </h6>
                      <p className="other__Sellersdelivery">
                        Delivery within{" "}
                        <span className="other__Sellersdays">17 days</span>
                      </p>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        className="checkbox__Otherseller"
                        name="radio__Checked"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between ot_Sell">
                    <div className="">
                      <h6 className="other__SellersPrice">
                        ₹ 450.00 - ₹ 1050.00
                      </h6>
                      <p className="other__Sellersdelivery">
                        Delivery within{" "}
                        <span className="other__Sellersdays">15 days</span>
                      </p>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        className="checkbox__Otherseller"
                        name="radio__Checked"
                      />
                      <div class="check"></div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between ot_Sell">
                    <div className="">
                      <h6 className="other__SellersPrice">
                        ₹ 550.00 - ₹ 1230.00
                      </h6>
                      <p className="other__Sellersdelivery">
                        Delivery within{" "}
                        <span className="other__Sellersdays">17 days</span>
                      </p>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        className="checkbox__Otherseller"
                        name="radio__Checked"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between ot_Sell">
                    <div className="">
                      <h6 className="other__SellersPrice">
                        ₹ 550.00 - ₹ 1230.00
                      </h6>
                      <p className="other__Sellersdelivery">
                        Delivery within{" "}
                        <span className="other__Sellersdays">17 days</span>
                      </p>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        className="checkbox__Otherseller"
                        name="radio__Checked"
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book_details_bottom clearfix">
          <div className="">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="book_details__para">
                  <h6>Book details</h6>
                  <pre>
                    Publisher{"  "}:{"  "}
                    <b>Aradhya Publishers</b>
                  </pre>
                  <pre>
                    Publication Date{"  "}:{"  "}
                    <b>26/09/2020</b>
                  </pre>
                  <pre>
                    Edition{"  "}:{"  "}
                    <b>2020</b>
                  </pre>
                  <pre>
                    Pages{"  "}:{"  "}
                    <b>250 Nos</b>
                  </pre>
                  <pre>
                    ISBN{"  "}:{"  "}
                    <b>1890765435234</b>
                  </pre>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="book_details__para">
                  <h6>About the author</h6>
                  <p>
                    In 1957, Norman received a B.S. degree in electrical
                    engineering from Massachusetts Institute of Technology .
                    Norman received an M.S. degree in electrical engineering
                    from the University of Pennsylvania. He received a PhD
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="book_details__para">
                  <h6>Services</h6>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle" /> Free delivery
                    </li>
                    <li>
                      <i className="fa-solid fa-circle" /> 7 Days replacement
                      window
                    </li>
                    <li>
                      <i className="fa-solid fa-circle" /> Hasslefree returns
                    </li>
                    <li>
                      <i className="fa-solid fa-circle" /> Easy cancellations
                    </li>
                    <li>
                      <i className="fa-solid fa-circle" /> Free delivery
                    </li>
                    <li>
                      <i className="fa-solid fa-circle" /> 7 Days replacement
                      window
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book_____descrption_part clearfix">
          <div className="book_____descrption_main">
            <h6>Book description</h6>
            <p>
              The Design of Everyday Things is a book about cognition and
              usability by Donald Norman.
            </p>
            <p>Summary of the Book</p>
            <p>
              Don Norman is the world’s leading authority on user-centric
              design. In this book, he explains why designers must always keep
              the end user in mind when designing anything from doors to
              computers. He explains how products must be designed by
              considering how they communicate with their users. This conduit of
              communication is what needs to be optimized to achieve a perfect
              design. When an objects malfunction, the fault doesn’t lie with
              the user, but with the design. All designs must cater to the
              users, and they must provide intuitive guidance for them to use
              the products naturally. Incorporating behavioral psychology,
              ergonomics, and design practice, this book is a definite read for
              all people who design things which are meant See More
            </p>
          </div>
        </section>

        <section className="search__slider_part clearfix">
          <div className="top__Categories">
            <div className="d-flex align-items-center justify-content-between">
              <h4>People also viewed</h4>
            </div>
            <div className="container">
              {/* <div id="top__namaskar">
                                <div className="categories__inner">
                                    <div className="categories__image">
                                        <img
                                            src="assets/images/book3010.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="name__Category">Book name</p>
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
                                </div>
                                <div className="categories__inner">
                                    <div className="categories__image">
                                        <img
                                            src="assets/images/book3013.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="name__Category">Book name</p>
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
                                </div>
                            </div> */}
            </div>
          </div>
        </section>

        <section className="reviews____retings clearfix">
          <div className="retings_texthead">
            <h2>Reviews and Ratings</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="retings__first_cnt">
                <div className="maincnt_rating">
                  <span className="fa-solid fa-star checked" />
                  <span className="fa-solid fa-star checked" />
                  <span className="fa-solid fa-star checked" />
                  <span className="fa-solid fa-star checked" />
                  <span className="fa-regular fa-star" />
                </div>
                <div className="retings__first_cnt-text">
                  <h5>
                    <strong>4.5+ </strong>&nbsp; 157 Global Reviews
                  </h5>
                </div>
                <div className="retings__progress_part">
                  <div className="retings__progress_count">
                    <h6>5.0</h6>
                  </div>
                  <div className="retings__prog__bar1">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="05"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                  <div className="retings__progress_pers">
                    <h6>15%</h6>
                  </div>
                </div>
                <div className="retings__progress_part">
                  <div className="retings__progress_count">
                    <h6>4+</h6>
                  </div>
                  <div className="retings__prog__bar2">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="05"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                  <div className="retings__progress_pers">
                    <h6>65%</h6>
                  </div>
                </div>
                <div className="retings__progress_part">
                  <div className="retings__progress_count">
                    <h6>3+</h6>
                  </div>
                  <div className="retings__prog__bar3">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="05"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                  <div className="retings__progress_pers">
                    <h6>10%</h6>
                  </div>
                </div>
                <div className="retings__progress_part">
                  <div className="retings__progress_count">
                    <h6>2+</h6>
                  </div>
                  <div className="retings__prog__bar4">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="05"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                  <div className="retings__progress_pers">
                    <h6>05%</h6>
                  </div>
                </div>
                <div className="retings__progress_part">
                  <div className="retings__progress_count">
                    <h6>1+</h6>
                  </div>
                  <div className="retings__prog__bar5">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="05"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                  <div className="retings__progress_pers">
                    <h6>05%</h6>
                  </div>
                </div>
              </div>
              <div className="Write-a-review_btn mb-5">
                <a href="#" onClick={toggleModal}>
                  Write a review
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              {loop.map((item) => {
                return (
                  <div className="retings__second_cnt mb-4">
                    <div className="retings__sec_clint d-flex">
                      <div className="retin__sec_clin_img">
                        <img src={Review_Person} alt="" className="img-fluid" />
                      </div>
                      <div className="retin__sec_clin_name">
                        <h3>Thomas</h3>
                        <div className="maincnt_rating">
                          <span className="fa-solid fa-star checked" />
                          <span className="fa-solid fa-star checked" />
                          <span className="fa-solid fa-star checked" />
                          <span className="fa-solid fa-star checked" />
                          <span className="fa-regular fa-star" />
                        </div>
                      </div>
                    </div>
                    <div className="retings__sec_clin_text">
                      <h2>Loved it !</h2>
                      <p>
                        Get the MIT press version if you intend to keep the
                        book. I have the kindle version and its much better (on
                        an iPad). The paper and book quality is abysmal.The book
                        is very well known and you can search for the author's
                        videos to give you an overview of what this book is
                        about. Makes you think and definitely a good starting
                        point if you want to learn more about design.
                      </p>
                      <div className="review__sec_all_img d-flex mb-5">
                        <div className="review__sec__img">
                          <img
                            src={BookImage}
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="review__sec__img">
                          <img
                            src={BookImage}
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="review__sec__img">
                          <img
                            src={BookImage}
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="review__sec__img_more">
                          <img
                            src={BookImage}
                            alt="image"
                            className="img-fluid"
                          />
                          <h4 className="review__sec_overlay">+3</h4>
                        </div>
                      </div>
                      <div className="review_Mark-helpful d-flex">
                        <div className="review_helpful d-flex mr-4">
                          <img src={Helpful} alt="" className="img-fluid" />
                          <p> Mark as helpful</p>
                        </div>
                        <div className="review_inappropriate d-flex">
                          <img src={Flag} alt="" className="img-fluid" />
                          <p> Flag as inappropriate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {modal && (
        <div className="book_details_modal rating_modal modal-part">
          <div className="modal-content">
            <h3>Review and rating</h3>
            <span>Rating</span>
            <div className="maincnt_rating2">
              <span className="fa-solid fa-star checked" />
              <span className="fa-solid fa-star checked" />
              <span className="fa-solid fa-star checked" />
              <span className="fa-solid fa-star checked" />
              <span
                className="fa-solid fa-star"
                style={{ fontSize: "24px", color: "#aeaaa7" }}
              />
            </div>
            <form className="">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  We are happy for you . Tell us more
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn bookdetails_modal_btn"
                onClick={() => {
                  toggleModal2();
                  setModal(false);
                }}
              >
                Post review
              </button>
            </form>

            <button
              onClick={() => setModal(!modal)}
              className="close-modal-part"
              style={{ border: "0" }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

      {modal2 && (
        <div className="book_details_modal2 modal-part">
          <div className="modal-content">
            <h2>Thanks for your feedback</h2>
            <p>
              We are glad that you are happy with your product. We have offers
              for you
            </p>
            <button className="book_details_btn_explore">Explore offers</button>
            <a href="#">Return to homepage</a>
            <button
              onClick={toggleModal2}
              className="close-modal-part"
              style={{ border: "0" }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

      {modal3 && (
        <div className="bookdetails_signin_modalpart modal-part text-center">
          <div className="modal-content">
            <div className="row d-flex display-full">
              <div
                className="col-md-6 display1 text-white"
                style={{
                  backgroundImage: `url('${modalbannerimage}')`,
                  position: "relative",
                }}
              >
                <div className="slick-slider" id="signin_modal_Slider">
                  {/* {loop1.map ((item) =>{
                                    return(
                                        <div className='signin-modal-slide'>
                                        <p className='text-white'>Welcome to</p>
                                        <h3>Ababil Books</h3>
                                        <img src={signinModal_image} style={{ margin: "10px 0" }} />
                                        <h3>Translations</h3>
                                        <p className='text-white'>Need a book in your language ?
                                            Request for translations now</p>
                                        </div>
                                    )
                                }

                                )} */}
                  <div className="signin-modal-slide">
                    <p className="text-white">Welcome to</p>
                    <h3>Ababil Books</h3>
                    <img src={signinModal_image} style={{ margin: "10px 0" }} />
                    <h3>Translations</h3>
                    <p className="text-white">
                      Need a book in your language ? Request for translations
                      now
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 display2">
                <h3>Sign in as</h3>
                <div className="signin_wraper_modal">
                  <div>
                    <button
                      onClick={() => {
                        toggleModal4();
                        setModal3(false);
                      }}
                    >
                      <img src={modalbuyer} />
                    </button>
                  </div>
                  <div>
                    <button>
                      <img src={modaldistributer} />
                    </button>
                  </div>
                </div>
                <h6>Continue as guest</h6>
                <p>
                  Don’t have an account ?{" "}
                  <span className="line">Create one</span>
                </p>
                <div className="terms">
                  <span>Terms & Conditions</span>
                  <span>Privacy</span>
                  <span>Help</span>
                </div>
              </div>
            </div>
            <button
              className="close-modal-part"
              onClick={toggleModal3}
              style={{ border: "0" }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

      {modal4 && (
        <div className="bookdetails_signin_modalpart signin_as_buyer modal-part text-center">
          <div className="modal-content">
            <div className="row d-flex display-full">
              <div
                className="col-md-6 display1 text-white"
                style={{
                  backgroundImage: `url('${modalbannerimage}')`,
                  position: "relative",
                }}
              >
                <div className="slick-slider" id="signin_modal_Slider">
                  {/* {loop1.map ((item) =>{
                                    return(
                                        <div className='signin-modal-slide'>
                                        <p className='text-white'>Welcome to</p>
                                        <h3>Ababil Books</h3>
                                        <img src={signinModal_image} style={{ margin: "10px 0" }} />
                                        <h3>Translations</h3>
                                        <p className='text-white'>Need a book in your language ?
                                            Request for translations now</p>
                                        </div>
                                    )
                                }

                                )} */}
                  <div className="signin-modal-slide">
                    <p className="text-white">Welcome to</p>
                    <h3>Ababil Books</h3>
                    <img src={buyerimg} style={{ margin: "10px 0" }} />
                    <h3>Request for books</h3>
                    <p className="text-white">
                      Request for prints when books are not printed anymore
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 display2">
                <h3>Sign in as buyer</h3>
                <form>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col" style={{ position: "relative" }}>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <i class="fa-regular fa-eye password-eye"></i>
                  </div>
                  <button
                    type="submit"
                    class="btn modal_buyer_btn"
                    onClick={async (value = {
                        email: "admin@gmail.com", 
                        password: "admin"
                    }) => { 
                         const response = await agent.Users.login(value);
                         //const res = await response.JSON();
                         console.log(response);
                    }}
                  >
                    Sign in
                  </button>
                </form>
                <h6>Forgot password ?</h6>
                <div className="terms">
                  <span>Terms & Conditions</span>
                  <span>Privacy</span>
                  <span>Help</span>
                </div>
              </div>
            </div>
            <button
              className="close-modal-part"
              onClick={toggleModal4}
              style={{ border: "0" }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

      {modal5 && (
        <div className="bookdetails_signinProcess_modalpart modal-part text-center">
          <div className="modal-content">
            <h2>Hold tight... Signing you in</h2>
            <button
              className="close-modal-part"
              onClick={toggleModal5}
              style={{ border: "0" }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

      {modal6 && (
        <div className="modal-part RequestModalpopup">
          <div className="modal-content">
            <div className="main_content">
              <div className="modal-header">
                <h2>Request for translation</h2>
                <button onClick={toggleModal6} className="close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="d-flex mb-5">
                <div className="image mr-3">
                  <img src={bookimgnew} alt="" className="img-fluid" />
                </div>
                <div className="text_all">
                  <div className="text_part">
                    <h4>The Design Of Everyday Things</h4>
                    <p>By Donald A Norman</p>
                    <p>Edition : 2019</p>
                  </div>
                  <div className="price">
                    <h3>
                      <i class="fa-solid fa-indian-rupee-sign"></i> 1,230.00
                    </h3>
                  </div>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <label htmlFor="">Language</label>
                      <select className="form-control" id="">
                        <option>French</option>
                        <option>India</option>
                        <option>UK</option>
                        <option>Dubai</option>
                        <option>Chaina</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <label htmlFor="">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <label htmlFor="">Book type</label>
                      <select className="form-control" id="">
                        <option>Hardcopy</option>
                        <option>demo</option>
                        <option>demo</option>
                        <option>demo</option>
                        <option>demo</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group Quantitybtn">
                      <label htmlFor="">Quantity</label>
                      <input type="text" className="form-control" id="" />
                      <div className="Units-text">
                        <p>Units</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="Request_translation_btn">
                <button className="btn" id="">
                  Request for translation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
