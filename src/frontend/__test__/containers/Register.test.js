import React from "react";
import { mount } from "enzyme";
import Register from "../../containers/Register.jsx";
import ProviderMock from "../../__mocks__/providerMock";

describe("<Register />", () => {
  test("Register form", () => {
    const preventDefault = jest.fn();
    const register = mount(
      <ProviderMock>
        <Register />
      </ProviderMock>
    );
    register.find("form").simulate("submit", { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    register.unmount();
  });
});
