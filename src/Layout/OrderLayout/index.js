import React from 'react'
import { Outlet } from 'react-router'
import HeaderNew from './HeaderNew'
import Footer from '../../Layout/mainlayout/Footer';
import Ordersidebar from '../../component/Ordersidebar';

export default function index() {
  return (
    <>
      <HeaderNew />
      {/* <div style={{ display:"flex", justifyContent: "spacebetween", flexWrap: "Wrap" }}> */}
        {/* <Ordersidebar /> */}
        <Outlet />
      {/* </div> */}

      <Footer />
    </>
  )
}
