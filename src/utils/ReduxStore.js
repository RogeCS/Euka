import React from "react";
import { BiTransfer } from "react-icons/bi";

export const initialState = {
  user: {},
  totalBalance: 0,
  transactionsList: [
    {
      title: "Ingreso mensual",
      type: "Salary",
      date: "2017-01-01",
      amount: 18909.32,
      income: true,
      icon: <BiTransfer />,
      color: "#000000",
    },
    {
      title: "Compra en amazon prime",
      type: "Subscription",
      date: "2018-01-01",
      amount: 11320.21,
      income: false,
      icon: <BiTransfer />,
      color: "#f39531",
    },
  ],
};
