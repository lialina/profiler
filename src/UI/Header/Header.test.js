import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header component", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  // OR
  it("renders without crashing 2", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  });

  // How? And is it needed at least?
  // it("wrapped in StyledHeader component", () => {
  //   const wrapper = shallow(<Header />);
  // });

  it("renders Button component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("Button")).toHaveLength(1);
  });
});
