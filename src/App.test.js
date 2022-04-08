import React from "react";
import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import App from "./App";
import Modal from "./components/Modal/Modal";
import ProfilesList from "./components/ProfileCard/ProfilesList";
import { toggleModal } from "./redux/modalSlice";
// import { store } from "../src/redux/store";
import { ModalButton } from "../src/components/Modal/ModalStyles";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

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

  it("dispatch", async () => {
    const expectedActions = [
      {
        payload: undefined,
        type: "modal/toggleModal",
      },
    ];
    store.dispatch(toggleModal());
    const actions = store.getActions();
    // console.log(actions);
    expect(actions).toEqual(expectedActions);

    // const expectedActions = {
    //   payload: undefined,
    //   type: "modal/toggleModal",
    // };
    // expect(store.dispatch(toggleModal())).toEqual(expectedActions);
  });

  it("closeModal", () => {
    // const expectedActions = {
    //   payload: undefined,
    //   type: "modal/toggleModal",
    // };

    useSelectorMock.mockReturnValue(true);

    const closeModal = jest.fn();
    const wrapper = mount(<App onClick={closeModal()} />);
    const useDispatchMock = jest.spyOn(redux, "useDispatch");
    useDispatchMock.mockReturnValue(jest.fn());
    const button = wrapper.find(ModalButton);
    button.simulate("click");
    // console.log(button.debug());

    // store.dispatch(toggleModal());
    // const actions = store.getActions();
    // console.log(actions);
    // expect(actions).toEqual(expectedActions);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
