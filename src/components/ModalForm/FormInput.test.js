import React from "react";
import { shallow, mount } from "enzyme";
import FormInput from "./FormInput";
import { StyledField } from "./StyledForm";
import { Formik, ErrorMessage } from "formik";
import { StyledErrorMessage } from "./StyledForm";

describe("FormInput component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<FormInput />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("contains StyledHeader component", () => {
    const wrapper = shallow(<FormInput />);
    expect(wrapper.exists(StyledField)).toBe(true);
  });

  const props = {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    errors: {
      firstName: "Some error",
    },
  };

  const wrapper = mount(
    <Formik>
      <FormInput {...props} />
    </Formik>
  );
  console.log(wrapper.debug());

  it("accepts props", () => {
    expect(wrapper.find(FormInput).props().name).toEqual(props.name);
  });

  it("renders StyledErrorMessage in ErrorMessage if error", () => {
    const props = {
      name: "firstName",
      error: "Some error",
      component: StyledErrorMessage,
    };

    const wrapper = mount(
      <Formik>
        <ErrorMessage {...props} />
      </Formik>
    );

    expect(wrapper.find(ErrorMessage).props().component).toEqual(
      props.component
    );
  });
});
