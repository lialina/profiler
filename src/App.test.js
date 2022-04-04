import React from "react";
import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import App from "./App";
import Modal from "./components/Modal/Modal";
import ProfilesList from "./components/ProfileCard/ProfilesList";

describe("App component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  useDispatchMock.mockReturnValue(jest.fn());

  const useSelectorMock = jest.spyOn(redux, "useSelector");

  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders Modal component in it if isModalVisible is true without crashing", () => {
    useSelectorMock.mockReturnValue(true);
    const wrapper = mount(<App />);
    expect(wrapper.exists(Modal)).toBe(true);
  });

  it("renders ProfilesList component in it if isModalVisible is false without crashing", () => {
    useSelectorMock.mockReturnValue(false);
    const wrapper = shallow(<App />);
    expect(wrapper.find(ProfilesList)).toHaveLength(1);
  });
});
