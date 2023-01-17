import React from 'react'
import { Outlet } from 'react-router';
import Header from "../../Layout/mainlayout/Header";
import Footer from "../../Layout/mainlayout/Footer";

export default function index() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}
