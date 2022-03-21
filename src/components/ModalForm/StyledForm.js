import styled from "styled-components";
import { Form, Field } from "formik";
import StyledButton from "../Button/StyledButton";

const StyledModal = styled(Form)`
  // width: 200px;
`;

const StyledField = styled(Field)`
  margin-top: 12px;
  margin-bottom: 4px;
  width: 200px;
`;

const StyledTextarea = styled(StyledField)`
  resize: none;
`;

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 200px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledFormButton = styled(StyledButton)`
  margin-top: 10px;
`;
export {
  StyledModal,
  StyledField,
  StyledTextarea,
  StyledErrorMessage,
  StyledContainer,
  StyledFormButton,
};
