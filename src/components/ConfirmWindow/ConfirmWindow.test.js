import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import ConfirmWindow from "./ConfirmWindow";
import StyledButton from "../Button/StyledButton";
import { StyledModalButton } from "../Modal/ModalStyles";
import { deleteProfileFetch } from "../../redux/profilesSlice";

describe("ConfirmWindow component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");

  it("renders without crashing", () => {
    const wrapper = shallow(<ConfirmWindow />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("deleteProfileFetch with onClick on StyledButton", () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);

    const wrapper = mount(<ConfirmWindow />);
    const button = wrapper.find(StyledButton);
    button.simulate("click");

    expect(mockedDispatch).toHaveBeenCalledWith(deleteProfileFetch());
  });

  it("click on StyledModalButton", () => {
    const onShowMock = jest.fn();
    const wrapper = shallow(<StyledModalButton onClick={onShowMock()} />);
    wrapper.simulate("click");

    expect(onShowMock).toHaveBeenCalledTimes(1);
  });
});
