import React from "react";
import Button from "./Button.jsx";
import NewTransaction from "./NewTransaction.jsx";
import { TransactionsData } from "../code/TransactionsData";
import { numberWithCommas } from "../code/Functions.js";
import "../styles/components/Transactions.scss";

const Transactions = () => {
  const [transaction, setTransaction] = React.useState(false);
  const handleClick = () => {
    setTransaction(!transaction);
  };

  return (
    <div className="transactions-layout">
      <NewTransaction transaction={transaction} onClick={handleClick} />
      <div className="make-transaction">
        <Button title="new transaction" type="primary" onClick={handleClick} />
        <Button title="settings" type="secondary" onClick={handleClick} />
      </div>
      <div className="transactions">
        <ul className="transactions__list">
          {TransactionsData.map((val, key) => (
            <li key={key} className="transaction__bullet">
              <div className="transaction__thumbnail">{val.img}</div>
              <div className="transaction__content">
                <h1 className="transaction__title">{val.title}</h1>
                <p className="transaction__date">{val.date}</p>
              </div>
              <p
                className={`transaction__amount ${
                  !val.income ? "transaction__amount--expense" : ""
                }`}
              >
                {`${val.income ? "+" : "-"} ${numberWithCommas(val.amount)}`}
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

export default Transactions;
