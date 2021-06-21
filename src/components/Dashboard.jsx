import React from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

import "../styles/components/Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
