import React from "react";
import { MdClose } from "react-icons/md";

import "../styles/components/NewTransaction.scss";

const NewTransaction = ({ transaction, onClick }) => {
  const [isIncome, setIsIncome] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handleDescription = (e) => setDescription(e.target.value);
  const handleAmount = (e) => setAmount(e.target.value);
  const makeIncome = () => setIsIncome(true);
  const makeExpense = () => setIsIncome(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Income: ${isIncome}\nDescription: ${description}\nAmount: ${amount}`
    );
    onClick();
  };

  const handleKeyPress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
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
              value={amount}
              onChange={handleAmount}
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

export default NewTransaction;
