import React from "react";
import TotalBalance from "./TotalBalance.jsx";
import Transactions from "./Transactions.jsx";

import "../styles/components/DashboardContent.scss";

const DashboardContent = ({ sidebar }) => {
  return (
    <div
      className={`dashboard-content ${
        sidebar ? "dashboard-content--margin" : ""
      }`}
    >
      <TotalBalance />
      <Transactions />
    </div>
  );
};

export default DashboardContent;
