import React from "react";
import Button from "../../components/Button/Button";
import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <Button type="button">Create profile</Button>
    </StyledHeader>
  );
};

export default Header;
