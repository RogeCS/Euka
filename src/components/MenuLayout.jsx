import React from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

import "../styles/components/MenuLayout.scss";

const MenuLayout = ({ sidebar, toggleSidebar }) => {
  return (
    <div className="menu-layout">
      <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <Header sidebar={sidebar} />
    </div>
  );
};

export default MenuLayout;
