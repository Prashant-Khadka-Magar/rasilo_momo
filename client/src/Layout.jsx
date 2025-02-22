import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  return (
    <>
      <Navbar />
      <Toaster />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
