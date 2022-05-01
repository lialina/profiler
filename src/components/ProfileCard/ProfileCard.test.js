import React from "react";
import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import ProfileCard from "./ProfileCard";
import StyledButton from "../Button/StyledButton";
import { openEditModal, closeEditModal } from "../../redux/modalSlice";
import Modal from "../Modal/Modal";
import { StyledModalButton } from "../Modal/ModalStyles";
import ConfirmWindow from "../ConfirmWindow/ConfirmWindow";

describe("ProfileCard component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
  const useSelectorMock = jest.spyOn(redux, "useSelector");

  const props = {
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  };

  it("renders without crashing", () => {
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

  it("dispatch openEditModal in case of StyledButton onClick", () => {
    const mockedDispatch = jest.fn();
    useSelectorMock.mockReturnValueOnce(false);
    useDispatchMock.mockReturnValue(mockedDispatch);

    const wrapper = mount(<ProfileCard />);
    const button = wrapper.find(StyledButton);
    button.simulate("click");

    expect(mockedDispatch).toHaveBeenCalledWith(openEditModal());
  });

  it("dispatch closeEditModal in case of StyledModalButton onClick in Modal", () => {
    useSelectorMock.mockReturnValueOnce(true);

    const mockedDispatch = jest.fn();
    useSelectorMock.mockReturnValueOnce(false);
    useDispatchMock.mockReturnValue(mockedDispatch);

    const wrapper = mount(<ProfileCard />);
    const modal = wrapper.find(Modal);
    const button = modal.find(StyledModalButton);
    button.simulate("click");

    expect(mockedDispatch).toHaveBeenCalledWith(closeEditModal());
  });

});
