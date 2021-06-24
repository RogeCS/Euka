import React from "react";
import { connect } from "react-redux";
import { setTransaction, setTotalBalance } from "../actions";
import { MdClose } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";

import "../styles/components/NewTransaction.scss";

const NewTransaction = (props) => {
  const { transaction, onClick } = props;
  const [isIncome, setIsIncome] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [amountOfTransaction, setAmount] = React.useState("");

  const handleDescription = (e) => setDescription(e.target.value);
  const handleAmount = (e) => setAmount(e.target.value);
  const makeIncome = () => setIsIncome(true);
  const makeExpense = () => setIsIncome(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTransaction();
    handleSetTotalBalance();
    onClick();
  };
  React.useEffect(() => {
    handleSetTotalBalance();
  }, []);

  const handleSetTotalBalance = () => {
    props.setTotalBalance();
  };

  const handleNewTransaction = () => {
    let title = description;
    let type = "Subscription";
    let date = "2018-01-01";
    let amount = parseFloat(amountOfTransaction.replace(/[^\d.-]/g, ""), 10);
    let income = isIncome;
    let icon = <BiTransfer />;
    let color = "#f39531";
    props.setTransaction({
      title,
      type,
      date,
      amount,
      income,
      icon,
      color,
    });
  };

  return (
    <div
      className={` new-transaction ${
        transaction ? "new-transaction--active" : "new-transaction--hidden"
      }`}
    >
      <div className="new-transaction__close-icon">
        <MdClose onClick={onClick} />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <h1 className="new-transaction__header">New Transaction</h1>
        <section className="new-transaction__section">
          <h3 className="new-transaction__title">Type</h3>
          <ul className="new-transaction__type-list">
            <li className="new-transaction__type-bullet">
              <div
                className={`new-transaction__type-button ${
                  isIncome ? "new-transaction__type-button--income" : ""
                }`}
                onClick={makeIncome}
              >
                Income
              </div>
            </li>
            <li>
              <div
                className={`new-transaction__type-button ${
                  !isIncome ? "new-transaction__type-button--expense" : ""
                }`}
                onClick={makeExpense}
              >
                Expense
              </div>
            </li>
          </ul>
        </section>
        <section className="new-transaction__section">
          <h3 className="new-transaction__title">Description</h3>
          <div className="new-transaction__form-group">
            <input
              type="input"
              className="new-transaction__form-field"
              placeholder="ex: Food"
              autoComplete="off"
              value={description}
              onChange={handleDescription}
              maxLength="30"
              required
            />
          </div>
        </section>
        <section className="new-transaction__section">
          <h3 className="new-transaction__title">Amount</h3>
          <div className="new-transaction__form-group">
            <input
              type="input"
              id="myInput"
              className="new-transaction__form-field"
              placeholder="ex: 1,000.00"
              autoComplete="off"
              value={amountOfTransaction}
              onChange={handleAmount}
              maxLength="20"
              required
            />
          </div>
        </section>
        <input
          type="submit"
          value={"Submit"}
          className="new-transaction__finish-button"
          placeholder="finish"
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setTransaction,
  setTotalBalance,
};

const mapStateToProps = (state) => {
  return {
    transactionsList: state.transactionsList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
