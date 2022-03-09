import styled from "styled-components";
import StyledButton from "../Button/StyledButton";

const StyledModal = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: auto;

    background-color: #ffffff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;

const StyledHeader = styled.h2`
  text-align: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ModalButton = styled(StyledButton)`
  font-size: 12px;
  margin-bottom: 15px;
`;

export { StyledModal, StyledHeader, StyledWrapper, ModalButton };
