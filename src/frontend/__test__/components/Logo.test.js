import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Logo from "../../components/Logo.jsx";
import ProviderMock from "../../__mocks__/providerMock";

describe("<Logo />", () => {
  test("Logo image", () => {
    const logo = mount(
      <ProviderMock>
        <Logo />
      </ProviderMock>
    );
    expect(logo.find("img")).toHaveLength(1);
  });
  test("Logo snapshot", () => {
    const logo = create(
      <ProviderMock>
        <Logo />
      </ProviderMock>
    );
    expect(logo.toJSON()).toMatchSnapshot();
  });
});
