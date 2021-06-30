import { setTotalBalance, loginRequest } from "../../actions";
import transactionsMock from "../../__mocks__/transactionsMock";

describe("Actions", () => {
  test("Set Total Balance", () => {
    const payload = transactionsMock;
    const expectedAction = {
      type: "SET_TOTAL_BALANCE",
      payload,
    };
    expect(setTotalBalance(payload)).toEqual(expectedAction);
  });

  test("Login", () => {
    const payload = {
      email: "oscar@gmail.com",
      password: "password",
    };
    const expectedAction = {
      type: "LOGIN_REQUEST",
      payload,
    };
    expect(loginRequest(payload)).toEqual(expectedAction);
  });
});
