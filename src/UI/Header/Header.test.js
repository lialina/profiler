import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import StyledHeader from "./StyledHeader";

describe("Header component", () => {
  it("renders without crashing 2", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("contains StyledHeader component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists(StyledHeader)).toBe(true);
  });

  it("renders Button component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("Button")).toHaveLength(1);
  });
});
