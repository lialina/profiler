import React from "react";
import { shallow, mount } from "enzyme";
import Modal from "./Modal";

describe("Modal component", () => {
  it("renders Modal component without crashing", () => {
    shallow(<Modal />);
  });

  // OR
  it("renders Modal component without crashing 2", () => {
    const ModalComponent = shallow(<Modal />);
    expect(ModalComponent.exists()).toBeTruthy();
  });
});
