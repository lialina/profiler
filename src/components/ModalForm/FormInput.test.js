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
    errors: "Some error",
  };

  const wrapper = mount(
    <Formik>
      <FormInput {...props} />
    </Formik>
  );

  it("accepts props", () => {
    expect(wrapper.find(FormInput).props().name).toEqual(props.name);
  });
});
