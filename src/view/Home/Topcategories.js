import React from 'react'
import TopcategoriesSlide from '../../component/TopcategoriesSlide'

export default function Topcategories() {
  return (
   <>
    <div className="top__Categories">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="section_Title" style={{ color: "#fff" }}>
            Top categories
          </h4>
          <p className="text-white">
            See all{" "}
            <span className="text-white">
              {/* <img
                src="assets/images/sell__allicons.png"
                alt="Arrow Icons"
                className="img-fluid"
              /> */}
              <i class="fa-solid fa-angle-right"></i>
            </span>
          </p>
        </div>
      <TopcategoriesSlide/>
      </div>
   </>
  )
}
