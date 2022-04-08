import React from "react";
import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import App from "./App";
import Modal from "./components/Modal/Modal";
import Button from "../src/components/Button/Button";
import ProfilesList from "./components/ProfileCard/ProfilesList";
import { toggleModal } from "./redux/modalSlice";
import { ModalButton } from "../src/components/Modal/ModalStyles";

describe("App component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
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

  it("openModal with onClick on Button in Header", () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
    useSelectorMock.mockReturnValue(true);

    const wrapper = mount(<App />);
    const button = wrapper.find(Button);
    button.simulate("click");

    expect(mockedDispatch).toHaveBeenCalledWith(toggleModal());
  });

  it("closeModal with onClick on ModalButton", () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
    useSelectorMock.mockReturnValue(true);

    const wrapper = mount(<App />);
    const button = wrapper.find(ModalButton);
    button.simulate("click");

    expect(mockedDispatch).toHaveBeenCalledWith(toggleModal());
  });
});
