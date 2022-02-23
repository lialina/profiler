import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

function Header() {
  return (
    <StyledHeader>
      <Button type="button">Create profile</Button>
    </StyledHeader>
  );
}

export default Header;
