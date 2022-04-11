import React from "react";
import { shallow, mount } from "enzyme";
import Button from "./Button";

describe("Button component", () => {
  it("renders Button component without crashing", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("accepts props", () => {
    const openModalMock = jest.fn();
    const props = { type: "button", onClick: openModalMock() };
    const wrapper = mount(<Button {...props} />);

    expect(wrapper.props().type).toEqual(props.type);
    expect(wrapper.props().onClick).toEqual(props.onClick);
  });

  it(`should have all properties`, () => {
    const openModalMock = jest.fn();
    const props = { type: "button", onClick: openModalMock() };
    const wrapper = mount(<Button props={props} />);
    const renderedProps = wrapper.props().props;
    for (let i = 0; i < renderedProps.length; i += 1) {
      expect(renderedProps[i]).toHaveProperty("type");
      expect(renderedProps[i]).toHaveProperty("onClick");
    }
  });

  it("click on button", () => {
    const openModalMock = jest.fn();
    const wrapper = shallow(<Button onClick={openModalMock()} />);
    wrapper.simulate("click");
    expect(openModalMock).toHaveBeenCalledTimes(1);
  });
});
