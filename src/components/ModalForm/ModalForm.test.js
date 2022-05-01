import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import ModalForm from "./ModalForm";
import { Formik } from "formik";
import { addProfileFetch, editProfileFetch } from "../../redux/profilesSlice";

const mockAddProfilePayload = {
  values: {
    firstName: "Anna",
    lastName: "Jons",
    phone: "+80302525789",
    email: "anna.jons@gmail.com",
    bio: "Developer",
  },
  setFieldError: jest.fn(),
};

const mockEditProfilePayload = {
  values: {
    firstName: "Anna",
    lastName: "Jons",
    phone: "+80302525789",
    email: "anna.jons@gmail.com",
    bio: "Developer",
  },
  setFieldError: jest.fn(),
  id: "1",
};

const mockProps = {
  firstName: "Anna",
  lastName: "Jons",
  phone: "+80302525789",
  email: "anna.jons@gmail.com",
  bio: "Developer",
  id: "1",
};

describe("ModalForm component", () => {
  const useDispatchMock = jest.spyOn(redux, "useDispatch");
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

  it("dispatch in case of form submitting with adding new profile", () => {
    const mockedDispatch = jest.fn();
    useSelectorMock.mockReturnValueOnce(false);
    useDispatchMock.mockReturnValue(mockedDispatch);

    const wrapper = mount(<ModalForm />);
    wrapper.find(Formik).props().onSubmit(mockAddProfilePayload.values, {
      setFieldError: mockAddProfilePayload.setFieldError,
    });

    expect(mockedDispatch).toHaveBeenCalledWith(
      addProfileFetch(mockAddProfilePayload)
    );
  });
});
