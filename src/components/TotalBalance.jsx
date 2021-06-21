import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "../styles/components/TotalBalance.scss";

const TotalBalance = () => {
  return (
    <div className="total-balance">
      <div className="total-balance__content">
        <div className="total-balance__top-line">
          <p className="total-balance__user-name">Oscar Rogelio Medina López</p>
          <div className="total-balance__settings">
            <BsThreeDots />
          </div>
        </div>
        <div className="amount-layout">
          <h1 className="amount-layout__money">2,723.70</h1>
          <p className="amount-layout__currency">MXN</p>
        </div>
        <h2 className="total-balance__bottom-line">Total Balance</h2>
      </div>
    </div>
  );
};

export default TotalBalance;
