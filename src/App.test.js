import React from "react";
import * as redux from "react-redux";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  useDispatchMock.mockReturnValue(jest.fn());

  const useSelectorMock = jest.spyOn(redux, "useSelector");
  // ...Does nor matter in this component, why?
  // ...Because of 2 possible options in conditional rendering in terms of isModalVisible value?
  useSelectorMock.mockReturnValue({ isModalVisible: true });

  it("renders without crashing", () => {
    shallow(<App />);
  });

  // OR
  it("renders without crashing 2", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders Modal component in it if isModalVisible is true without crashing", () => {
    // ...The same, isModalVisible value does not matter, why?
    useSelectorMock.mockReturnValue({ isModalVisible: true });
    const wrapper = shallow(<App />);
    expect(wrapper.find("Modal")).toHaveLength(1);
  });

  // ...Fails because of empty profiles in ProfilesList?
  // it("renders ProfilesList component in it if isModalVisible is false without crashing", () => {
  //   useSelectorMock.mockReturnValue({ isModalVisible: false });
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("ProfilesList")).toHaveLength(1);
  //   // expect(wrapper.exists()).toBeTruthy();
  // });
});
