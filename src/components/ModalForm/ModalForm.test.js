import React from "react";
import * as redux from "react-redux";
import { shallow } from "enzyme";
import ModalForm from "./ModalForm";

describe("ModalForm component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  useDispatchMock.mockReturnValue(jest.fn());

  const useSelectorMock = jest.spyOn(redux, "useSelector");
  useSelectorMock.mockReturnValue({ isLoading: false });

  it("renders ModalForm component without crashing", () => {
    shallow(<ModalForm />);
  });

  // OR
  it("renders ModalForm component without crashing 2", () => {
    const wrapper = shallow(<ModalForm />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders <p> tag with Loading text un it if isLoading is true without crashing", () => {
    // Again the selector value does not work, but at least it is needed
    useSelectorMock.mockReturnValue({ isLoading: true });
    const wrapper = shallow(<ModalForm />);
    const text = wrapper.find("p").text();
    expect(text).toBe("Loading...");
  });
});
