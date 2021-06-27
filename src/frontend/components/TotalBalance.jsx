import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { connect } from "react-redux";
import { numberWithCommas } from "../code/Functions";
import "../styles/components/TotalBalance.scss";

const TotalBalance = ({ totalBalance }) => {
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
          <h1 className="amount-layout__money">
            {numberWithCommas(totalBalance.toFixed(2))}
          </h1>
          <p className="amount-layout__currency">MXN</p>
        </div>
        <h2 className="total-balance__bottom-line">Total Balance</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalBalance: state.totalBalance,
  };
};

export default connect(mapStateToProps, null)(TotalBalance);
