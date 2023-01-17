import React from 'react'
import Topbooks from '../../component/Topbooks'

export default function Selfhelp() {
  return (
    <div className="top__SelfHelpBook">
    <div className="d-flex align-items-center justify-content-between">
      <h4 className="section_Title">Top books in Self Help</h4>
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
   <Topbooks/>
  </div>
  )
}
