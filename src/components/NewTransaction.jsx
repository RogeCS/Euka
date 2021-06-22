import React from "react";
import { MdClose } from "react-icons/md";

import "../styles/components/NewTransaction.scss";

const NewTransaction = ({ transaction, onClick }) => {
  return (
    <div
      className={` new-transaction ${
        transaction ? "new-transaction--active" : "new-transaction--hidden"
      }`}
    >
      <div className="new-transaction__close-icon">
        <MdClose onClick={onClick} />
      </div>
      <form action=""></form>
    </div>
  );
};

export default NewTransaction;
