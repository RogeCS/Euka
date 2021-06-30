import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Sidebar from "../../components/Sidebar.jsx";

describe("<Sidebar />", () => {
  const sidebar = mount(<Sidebar />);

  //Checamos si existe sidebar
  test("Render Sidebar component", () => {
    expect(sidebar.length).toEqual(1);
  });

  test("Sidebar has 1 list", () => {
    expect(sidebar.find("ul")).toHaveLength(1);
  });

  /**
  Los snapshots nos ayudan a guardar la estructura
  actual de un componente y nos permite comparar los
  cambios que hagamos en el mismo y decidir si aceptamos
  los cambios o no.
  */
  test("Sidebar Snapshot", () => {
    const sidebar = create(<Sidebar />);
    expect(sidebar.toJSON()).toMatchSnapshot();
  });
});
