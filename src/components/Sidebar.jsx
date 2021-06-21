import React from "react";
import Logo from "./Logo.jsx";
import { SidebarData } from "../code/SidebarData";

import "../styles/components/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-sidebar__logo">
        <Logo color="primary" />
      </div>
      <ul className="dashboard-sidebar__list">
        {SidebarData.map((val, key) => (
          <li
            key={key}
            className={`dashboard-sidebar__row ${
              window.location.pathname == val.link
                ? "dashboard-sidebar__row--active"
                : ""
            }`}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div className="dashboard-sidebar__icon">{val.icon}</div>
            <div
              className={`dashboard-sidebar__title ${
                window.location.pathname == val.link
                  ? "dashboard-sidebar__title--active"
                  : ""
              }`}
            >
              {val.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
