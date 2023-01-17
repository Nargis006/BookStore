import React from 'react'
import social1 from "../../images/socialicons1.png"
import social2 from "../../images/socialicons2.png"
import social3 from "../../images/socialicons3.png"
import social4 from "../../images/socialicons4.png"


export default function Footer() {
  return (
    <>
        <footer className="footer">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <h4>Shop by category</h4>
        <ul>
          <li>
            <a href="#">Fiction</a>
          </li>
          <li>
            <a href="#">Romance</a>
          </li>
          <li>
            <a href="#">Horror</a>
          </li>
          <li>
            <a href="#">Crime</a>
          </li>
          <li>
            <a href="#">Sci-Fi</a>
          </li>
          <li>
            <a href="#">Adventure</a>
          </li>
          <li>
            <a href="#">Biography</a>
          </li>
          <li>
            <a href="#">Self Help</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
        <h4>Shop by type</h4>
        <ul>
          <li>
            <a href="#">Ebooks</a>
          </li>
          <li>
            <a href="#">Hard covers</a>
          </li>
          <li>
            <a href="#">Paperback</a>
          </li>
        </ul>
        <h4>About us</h4>
        <ul>
          <li>
            <a href="#">Our story</a>
          </li>
          <li>
            <a href="#">About Ababil</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
        <h4>Helpdesk</h4>
        <ul>
          <li>
            <a href="#">Registration</a>
          </li>
          <li>
            <a href="#">Refunds</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Piracy </a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms and conditions</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-5 col-md-4 col-sm-6 col-12">
        <h4>Subscribe to newsletter</h4>
        <p>
          Hello Bibliophiles ! Be the first one to get the offers,new arrivals
          on our book store.
        </p>
        <div className="input-group sub__Scribeinput">
          <input
            type="text"
            className="form-control"
            placeholder="Enter E-mail address here"
          />
          <div className="sub__Text">
            <span className="input-group-text">Subscribe</span>
          </div>
        </div>
        <h4>Follow and share us</h4>
        <div className="d-flex align-items-center social__icons__Footer">
          <a href="#">
            <img
              src={social1}
              alt="Social icons"
              className="img-fluid"
            />
          </a>
          <a href="#">
            <img
              src={social2}
              alt="Social icons"
              className="img-fluid"
            />
          </a>
          <a href="#">
            <img
              src={social3}
              alt="Social icons"
              className="img-fluid"
            />
          </a>
          {/* <a href="#">
            <img
              src={social4}
              alt="Social icons"
              className="img-fluid"
            />
          </a> */}
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}
