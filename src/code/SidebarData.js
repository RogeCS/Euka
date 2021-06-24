import React from "react";
import { MdHome, MdMail, MdGroup } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    icon: <MdHome />,
    link: "/",
  },
  {
    title: "Analytics",
    icon: <ImStatsDots />,
    link: "/login",
  },
  {
    title: "Mailbox",
    icon: <MdMail />,
    link: "/mailbox",
  },
  {
    title: "Family",
    icon: <MdGroup />,
    link: "/family",
  },
];
