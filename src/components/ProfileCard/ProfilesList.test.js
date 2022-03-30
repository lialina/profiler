import React from "react";
import * as redux from "react-redux";
import { shallow } from "enzyme";
import ProfilesList from "./ProfilesList";

describe("ProfilesList component", () => {
  const profilesMock = [
    {
      firstName: "Anna",
      lastName: "Jons",
      phone: "+80302525789",
      email: "anna.jons@gmail.com",
      bio: "Developer",
    },
  ];

  const useSelectorMock = jest.spyOn(redux, "useSelector");

  it("renders ProfilesList component without crashing", () => {
    useSelectorMock.mockReturnValue({ profiles: profilesMock });
    shallow(<ProfilesList />);
  });

  // OR
  it("renders ProfilesList component without crashing 2", () => {
    useSelectorMock.mockReturnValue({ profiles: profilesMock });
    const wrapper = shallow(<ProfilesList />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
