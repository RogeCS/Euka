import React from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import TotalBalance from "./TotalBalance.jsx";

import "../styles/components/Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />
      <div className="dashboard-content">
        <TotalBalance />
      </div>
    </div>
  );
};

export default Dashboard;
