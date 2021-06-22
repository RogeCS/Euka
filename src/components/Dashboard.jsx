import React from "react";
import MenuLayout from "./MenuLayout.jsx";
import DashboardContent from "./DashboardContent.jsx";

import "../styles/components/Dashboard.scss";

const Dashboard = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  return (
    <div className="dashboard-layout">
      <MenuLayout sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <DashboardContent sidebar={sidebar} />
    </div>
  );
};

export default Dashboard;
