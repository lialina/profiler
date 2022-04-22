import styled from "styled-components";
import StyledButton from "../Button/StyledButton";

const StyledModal = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: auto;
  padding: 30px 20px 25px;

  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const StyledHeader = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 28px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledModalButton = styled(StyledButton)`
  font-size: 12px;
  margin-top: 10px;
  border: 1px solid #a0a1a3;
  background: #a0a1a3;

  &:hover,
  &:active {
    background: #b3b4b5;
    border-color: #b3b4b5;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

const StyledText = styled.p`
  text-align: center;
  margin-bottom: 16px;
`;

export {
  StyledModal,
  StyledHeader,
  StyledWrapper,
  StyledModalButton,
  StyledText,
};
