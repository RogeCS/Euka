export const setTransaction = (payload) => ({
  type: "SET_TRANSACTION",
  payload,
});

export const setTotalBalance = (payload) => ({
  type: "SET_TOTAL_BALANCE",
  payload,
});

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});
