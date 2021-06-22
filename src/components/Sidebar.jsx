import React from "react";
import Logo from "./Logo.jsx";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../code/SidebarData";

import "../styles/components/Sidebar.scss";

const Sidebar = ({ sidebar, toggleSidebar }) => {
  return (
    <div
      className={
        sidebar
          ? "dashboard-sidebar dashboard-sidebar--open"
          : "dashboard-sidebar dashboard-sidebar--close"
      }
    >
      <div className="dashboard-sidebar__toggle" onClick={toggleSidebar}>
        <span className="dashboard-sidebar__close">
          <AiIcons.AiFillCaretLeft />
        </span>
        <span className="dashboard-sidebar__open">
          <AiIcons.AiFillCaretRight />
        </span>
      </div>
      <span className="dashboard-sidebar__logo">
        <Logo color="primary" />
      </span>
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
            <span className="dashboard-sidebar__icon">{val.icon}</span>
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
