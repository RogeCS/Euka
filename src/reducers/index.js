const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TRANSACTION":
      return {
        ...state,
        transactionsList: [action.payload, ...state.transactionsList],
      };

    case "SET_TOTAL_BALANCE":
      return {
        ...state,
        totalBalance: action.payload,
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

    default:
      return state;
  }
};

export default reducer;
