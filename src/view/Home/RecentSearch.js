import React from 'react'
import SearchSlide from '../../component/SearchSlide'

export default function RecentSearch() {
  return (
    <>
        <div className="recent__SerachEs">
          <div className="d-flex align-items-center justify-content-between recentsearches">
            <h4 className="section_Title">Recent searches</h4>
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
       <SearchSlide/>
        </div>
    </>
  )
}
