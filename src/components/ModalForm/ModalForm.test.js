import React from "react";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import ModalForm from "./ModalForm";
// import { store } from "../../redux/store";
import { addProfileFetch } from "../../redux/profilesSlice";

const mockStore = configureStore();
const store = mockStore();

describe("ModalForm component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  useDispatchMock.mockReturnValue(jest.fn());

  const useSelectorMock = jest.spyOn(redux, "useSelector");

  it("renders without crashing", () => {
    const wrapper = shallow(<ModalForm />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders <p> tag with Loading text un it if isLoading is true without crashing", () => {
    useSelectorMock.mockReturnValue(true);
    const wrapper = mount(<ModalForm />);
    const text = wrapper.find("p").text();
    expect(text).toBe("Loading...");
  });

  it("dispatch", async () => {
    const mockPayload = {
      values: {
        firstName: "Anna",
        lastName: "Jons",
        phone: "+80302525789",
        email: "anna.jons@gmail.com",
        bio: "Developer",
      },
      setFieldError: jest.fn(),
    };

    const expectedActions = [
      {
        payload: mockPayload,
        type: "profiles/addProfileFetch",
      },
    ];
    store.dispatch(addProfileFetch(mockPayload));
    const actions = store.getActions();
    console.log(actions);
    expect(actions).toEqual(expectedActions);

    // const expectedActions = {
    //   payload: mockPayload,
    //   type: "profiles/addProfileFetch",
    // };
    // expect(store.dispatch(addProfileFetch(mockPayload))).toEqual(
    //   expectedActions
    // );
  });
});
