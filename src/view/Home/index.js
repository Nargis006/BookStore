import React from 'react'
import Exclusive from "../Home/Exclusive";
import Bannerslide from './Bannerslide';
import BestSellor from './BestSellor';
import Fiction from './Fiction';
import RecentSearch from './RecentSearch';
import Selfhelp from './Selfhelp';
import Topcategories from './Topcategories';
import homebanner  from "../../images/home_page_banner.jpg";


function Index() {




  
  return (
    <>
      <div className="home_page_bg-img" style={{ backgroundImage: `url('${homebanner}')`, position: 'relative' }}>
        <div className="container-fluid">
          {/* Browse Section Start */}
          <div className="browse__Section">
            <div className="row justify-content-center">
              <div className="col-md-8 col-12">
                <h1>Browse over 1000+ books</h1>
                <p>We have a handful of books waiting for your order</p>
                <div className="form-group d-flex align-items-center justify-content-center">
                  <input
                    type="text"
                    className="form-control search"
                    placeholder="Search for books , authors , ISBN here"
                  />
                  <img
                    src="assets/images/search.png"
                    alt="Search Icons"
                    className="img-fluid browse__Searchicons"
                  />
                </div>
              </div>
            </div>
          </div>

          <Topcategories />

        </div>
      </div>

      <div className="container-fluid">

        <Bannerslide />

        <BestSellor />

        <Selfhelp />

        <Fiction />

        <Exclusive />

        <RecentSearch />
      </div>
    </>
  )
  }

export default Index