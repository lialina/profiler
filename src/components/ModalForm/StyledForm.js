import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
import StyledButton from "../Button/StyledButton";

const StyledModal = styled(Form)``;

const StyledField = styled(Field)`
  margin-top: 12px;
  margin-bottom: 4px;

  // &:last-child {
  //   margin-bottom: 0;
  // }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
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
  StyledErrorMessage,
  StyledContainer,
  StyledFormButton,
};
