import React from "react";
import { shallow, mount } from "enzyme";
import ProfileCard from "./ProfileCard";

describe("ProfileCard component", () => {
  const props = {
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  };

  it("renders without crashing", () => {
    shallow(<ProfileCard />);
  });

  // OR
  it("renders without crashing 2", () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("accepts props", () => {
    const wrapper = mount(<ProfileCard data={props} />);

    expect(wrapper.props().data).toEqual(props);
  });

  it(`should have all properties`, () => {
    const wrapper = mount(<ProfileCard props={props} />);
    const renderedProps = wrapper.props().props;
    for (let i = 0; i < renderedProps.length; i += 1) {
      expect(renderedProps[i]).toHaveProperty("id");
      expect(renderedProps[i]).toHaveProperty("firstName");
      expect(renderedProps[i]).toHaveProperty("lastName");
      expect(renderedProps[i]).toHaveProperty("phone");
      expect(renderedProps[i]).toHaveProperty("email");
      expect(renderedProps[i]).toHaveProperty("bio");
    }
  });
});
