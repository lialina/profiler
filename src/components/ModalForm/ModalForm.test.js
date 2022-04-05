import React from "react";
import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import ModalForm from "./ModalForm";

describe("ModalForm component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  useDispatchMock.mockReturnValue(jest.fn());

  const useSelectorMock = jest.spyOn(redux, "useSelector");
  useSelectorMock.mockReturnValue({ isLoading: false });

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
});
