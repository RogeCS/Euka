import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../code/SidebarData";

import "../styles/components/Sidebar.scss";

const Sidebar = ({ sidebar, toggleSidebar }) => {
  const [windowLocation, setWindowLocation] = React.useState(0);

  React.useEffect(() => {
    setWindowLocation(window.location.pathname);
  });

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
          <Link className="dashboard-sidebar__link" key={key} to={val.link}>
            <li
              key={key}
              className={`dashboard-sidebar__row ${
                windowLocation == val.link
                  ? "dashboard-sidebar__row--active"
                  : ""
              }`}
            >
              <span className="dashboard-sidebar__icon">{val.icon}</span>
              <div
                className={`dashboard-sidebar__title ${
                  windowLocation == val.link
                    ? "dashboard-sidebar__title--active"
                    : ""
                }`}
              >
                {val.title}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
