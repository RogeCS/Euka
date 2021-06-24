import React from "react";
import { connect } from "react-redux";
import Button from "./Button.jsx";
import NewTransaction from "./NewTransaction.jsx";
import { numberWithCommas } from "../code/Functions.js";
import "../styles/components/Transactions.scss";

const Transactions = ({ transactionsList }) => {
  const [transaction, setTransaction] = React.useState(false);
  const handleClick = () => {
    setTransaction(!transaction);
  };

  return (
    <div className="transactions-layout">
      <NewTransaction transaction={transaction} onClick={handleClick} />
      <div className="make-transaction">
        <Button
          text="new transaction"
          color="primary"
          onClick={handleClick}
          link="#"
        />
        <Button text="settings" color="secondary" link="#" />
      </div>
      <div className="transactions">
        <ul className="transactions__list">
          {transactionsList.map((val, key) => (
            <li key={key} className="transaction__bullet">
              <div className="transaction__thumbnail">{val.icon}</div>
              <div className="transaction__content">
                <h1 className="transaction__title">{val.title}</h1>
                <p className="transaction__date">{val.date}</p>
              </div>
              <p
                className={`transaction__amount ${
                  !val.income ? "transaction__amount--expense" : ""
                }`}
              >
                {`${val.income ? "+" : "-"} ${numberWithCommas(
                  val.amount.toFixed(2)
                )}`}
                <span> MXN </span>
              </p>
            </li>
          ))}
        </ul>
        <div className="transactions__end"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalBalance: state.totalBalance,
    transactionsList: state.transactionsList,
  };
};

export default connect(mapStateToProps, null)(Transactions);
