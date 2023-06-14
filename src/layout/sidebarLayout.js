import React from "react";
import Navbar from "../module/common/Navbar";
import Slider from "../module/common/Slider";
import Sidebar from "../module/common/Sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="px-3.5 mt-24 flex flex-col gap-4 xl:px-24 xl:flex-row">
        <Sidebar></Sidebar>
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
