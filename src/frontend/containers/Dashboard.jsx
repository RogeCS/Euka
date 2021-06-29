import React from "react";
import { useSSRMounted } from "../hooks/ssr-mounted.jsx";
import MenuLayout from "../components/MenuLayout.jsx";
import DashboardContent from "../components/DashboardContent.jsx";

import "../styles/components/Dashboard.scss";

const Dashboard = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  const isSsr = useSSRMounted();
  if (isSsr) return null;
  return (
    <div className="dashboard-layout">
      <MenuLayout sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <DashboardContent sidebar={sidebar} />
    </div>
  );
};

export default Dashboard;
