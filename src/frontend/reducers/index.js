const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TRANSACTION":
      return {
        ...state,
        transactionsList: [action.payload, ...state.transactionsList],
      };

    case "SET_TOTAL_BALANCE":
      let tempTotalBalance = 0;
      state.transactionsList.forEach((item) => {
        if (item.income) tempTotalBalance += item.amount;
        if (!item.income) tempTotalBalance -= item.amount;
      });
      return {
        ...state,
        totalBalance: tempTotalBalance,
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
