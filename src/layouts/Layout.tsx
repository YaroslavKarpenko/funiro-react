import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: React.FC = () => {
  return (
    <div className="bg-white flex mx-[100px] flex-col m-auto min-h-full h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
