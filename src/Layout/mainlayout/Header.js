import React from 'react'
import logo from "../../images/Ababil_logo.png"
import cart from "../../images/cart.png"
import user from "../../images/user.png"
import cart1 from "../../images/biggest-discount-image-1.png"
import del from "../../images/delete.png"
import drop from "../../images/caretdown.png"


export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top px-0">
        <div className="container-fluid">
          <a
            href="javacript:void(0)"
            className="navbar-brand d-flex align-items-center"
          >
            <h1 className="m-0">
              <img
                className="img-fluid me-3"
                src={logo}
                alt="Logo"
              />
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mx-auto pe-4 py-3 py-lg-0">
              <a href="javacript:void(0)" className="nav-item nav-link active">
                Explore
              </a>
              <a href="javacript:void(0)" className="nav-item nav-link">
                Offers
              </a>
              <a href="javacript:void(0)" className="nav-item nav-link">
                Wishlist
              </a>
            </div>
            <div className="navbar-nav icons__rightside">
              <a href="javacript:void(0)" className="nav-item nav-link active">
                <img
                  src={cart}
                  alt="Cart Icons"
                  className="img-fluid"
                />
              </a>
              <div className="cart__HoversecTion">
                <div className="card">
                  <div className="card-body">
                    <h4 className="your__Cart">Your cart</h4>
                    <div className="row mb-4">
                      <div className="col-md-3">
                        <div className="cart__hoverimage">
                          <img
                            src={cart1}
                            alt=""
                            className="img-fluid cart__productimage"
                          />
                        </div>
                        <div className="d-flex align-items-center mt-3">
                          <span className="mr-2">QTY</span>
                          <div className="position-relative">
                            <select name="" id="" className="qty__Value">
                              <option value="">1</option>
                            </select>
                            <img
                              src={drop}
                              alt="Caret Down Icons"
                              className="img-fluid cart_Downicons p-0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="card__Detailstext">
                          <div className="row">
                            <div className="col-md-9 p-xl-0">
                              <h4 className="design__Things">
                                The Design Of Everyday Things
                              </h4>
                              <p>By Donald A Norman</p>
                              <div className="format__ValuE">
                                <span>Format : </span>
                                <span> Hardcover</span>
                              </div>
                              <div className="d-flex align-items-center price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                <span className="">1230.00</span>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="d-flex align-items-center">
                                <a
                                  href="#"
                                  className="remove__cart__Detailstext"
                                >
                                  <img
                                    src={del}
                                    alt="Delete Icons"
                                    className="img-fluid p-0"
                                  />
                                  <span>Remove</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-3">
                        <div className="cart__hoverimage">
                          <img
                            src={cart1}
                            alt=""
                            className="img-fluid cart__productimage"
                          />
                        </div>
                        <div className="d-flex align-items-center mt-3">
                          <span className="mr-2">QTY</span>
                          <div className="position-relative">
                            <select name="" id="" className="qty__Value">
                              <option value="">1</option>
                            </select>
                            <img
                              src={drop}
                              alt="Caret Down Icons"
                              className="img-fluid cart_Downicons p-0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="card__Detailstext">
                          <div className="row">
                            <div className="col-md-9 p-xl-0">
                              <h4 className="design__Things">
                                The Design Of Everyday Things
                              </h4>
                              <p>By Donald A Norman</p>
                              <div className="format__ValuE">
                                <span>Format : </span>
                                <span> Hardcover</span>
                              </div>
                              <div className="d-flex align-items-center price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                <span className="">1230.00</span>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="d-flex align-items-center">
                                <img
                                  src={del}
                                  alt="Delete Icons"
                                  className="img-fluid p-0"
                                />
                                <span>Remove</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="proceed_checoutBTn mt-5">
                      <button className="btn btn-block">Proceed to checout</button>
                    </div>
                  </div>
                </div>
              </div>
              <a href="javacript:void(0)" className="nav-item nav-link">
                <img
                  src={user}
                  alt="Cart Icons"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
